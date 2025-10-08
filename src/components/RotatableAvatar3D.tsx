import { BodyMeasurement } from "@/types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}

const Avatar3DModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      "/models/avatar.fbx",
      (fbx) => {
        // Center the model
        const box = new THREE.Box3().setFromObject(fbx);
        const center = box.getCenter(new THREE.Vector3());
        fbx.position.sub(center);
        
        // Scale the model to fit
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        fbx.scale.setScalar(scale);

        // Apply materials
        fbx.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xcccccc,
              roughness: 0.5,
              metalness: 0.1,
            });
          }
        });

        setModel(fbx);
      },
      undefined,
      (error) => {
        console.error("Error loading FBX:", error);
      }
    );
  }, []);

  return (
    <group ref={groupRef}>
      {model && <primitive object={model} />}
    </group>
  );
};

const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar = "/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png"
}: RotatableAvatar3DProps) => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <Avatar3DModel />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
        Drag to rotate • Scroll to zoom
      </div>

      {/* Highlighting overlays */}
      {activeMeasurement && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Shoulders highlight */}
          {activeMeasurement === "shoulders" && (
            <div className="absolute top-[18%] left-1/2 transform -translate-x-1/2 w-36 h-6 bg-red-400/30 border-2 border-red-400 rounded-full animate-pulse" />
          )}
          
          {/* Bust highlight */}
          {activeMeasurement === "bust" && (
            <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-24 h-10 bg-teal-400/30 border-2 border-teal-400 rounded-full animate-pulse" />
          )}
          
          {/* Waist highlight */}
          {activeMeasurement === "waist" && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-16 h-6 bg-blue-400/30 border-2 border-blue-400 rounded-full animate-pulse" />
          )}
          
          {/* Hips highlight */}
          {activeMeasurement === "hips" && (
            <div className="absolute top-[72%] left-1/2 transform -translate-x-1/2 w-28 h-10 bg-green-400/30 border-2 border-green-400 rounded-full animate-pulse" />
          )}
        </div>
      )}
    </div>
  );
};

export default RotatableAvatar3D;