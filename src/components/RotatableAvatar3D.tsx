import { BodyMeasurement } from "@/types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}

const AvatarModel = () => {
  const meshRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load(
      "/models/FinalBaseMesh.obj",
      (obj) => {
        // Center the model
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        // Scale the model
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        obj.scale.multiplyScalar(scale);

        // Apply material
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: 0xcccccc,
              shininess: 30,
            });
          }
        });

        setModel(obj);
      },
      undefined,
      (error) => {
        console.error("Error loading OBJ model:", error);
      }
    );
  }, []);

  return model ? <primitive ref={meshRef} object={model} /> : null;
};

const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar = "/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png"
}: RotatableAvatar3DProps) => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <AvatarModel />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default RotatableAvatar3D;