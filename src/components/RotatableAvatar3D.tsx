import { BodyMeasurement } from "@/types";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useEffect, useState } from "react";
import * as THREE from "three";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}

function AvatarModel({ activeMeasurement }: { activeMeasurement?: keyof BodyMeasurement | null }) {
  const obj = useLoader(OBJLoader, "/models/FinalBaseMesh.obj");
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    if (obj) {
      const clonedObj = obj.clone();
      
      // Apply material
      clonedObj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: 0xcccccc,
            shininess: 30,
          });
        }
      });

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(clonedObj);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      clonedObj.position.x = -center.x;
      clonedObj.position.y = -center.y;
      clonedObj.position.z = -center.z;
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 4 / maxDim;
      clonedObj.scale.setScalar(scale);

      setModel(clonedObj);
    }
  }, [obj]);

  if (!model) return null;

  return <primitive object={model} />;
}

const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar = "/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png"
}: RotatableAvatar3DProps) => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <AvatarModel activeMeasurement={activeMeasurement} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
      <div className="absolute bottom-2 text-xs text-muted-foreground">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default RotatableAvatar3D;