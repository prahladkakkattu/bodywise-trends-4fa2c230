import { useRef, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";
import { BodyMeasurement } from "@/types";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}

const AvatarModel = ({ activeMeasurement }: { activeMeasurement?: keyof BodyMeasurement | null }) => {
  const obj = useLoader(OBJLoader, "/models/FinalBaseMesh.obj");
  const meshRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: 0xA0856B,
            flatShading: false,
          });
        }
      });
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      obj.position.x = -center.x;
      obj.position.y = -center.y;
      obj.position.z = -center.z;
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      obj.scale.setScalar(scale);
    }
  }, [obj]);

  return <primitive ref={meshRef} object={obj} />;
};

const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar
}: RotatableAvatar3DProps) => {
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-full min-h-[300px] bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      {!error ? (
        <>
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 1]} intensity={0.8} />
            <pointLight position={[-2, 1, 1]} intensity={0.4} />
            
            <AvatarModel activeMeasurement={activeMeasurement} />
            
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              maxDistance={5}
              minDistance={1.5}
              autoRotate={false}
            />
          </Canvas>
          
          <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-white/80 px-2 py-1 rounded">
            Drag to rotate • Scroll to zoom
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Failed to load 3D model
        </div>
      )}
    </div>
  );
};

export default RotatableAvatar3D;