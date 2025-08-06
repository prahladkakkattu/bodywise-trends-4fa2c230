import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { BodyMeasurement } from '@/types';

interface BodyShapeAvatar3DProps {
  measurements: BodyMeasurement;
}

interface BodyPartProps {
  measurements: BodyMeasurement;
}

const BodyPart = ({ measurements }: BodyPartProps) => {
  const meshRef = useRef<Group>(null);
  
  // Static realistic human silhouette
  const silhouetteMaterial = <meshLambertMaterial color="#1a1a1a" />;

  return (
    <group ref={meshRef} scale={[1, 1, 1]}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.12, 24, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 0.1, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Torso - upper chest */}
      <mesh position={[0, 1.35, 0]} scale={[1, 1, 0.6]}>
        <sphereGeometry args={[0.18, 24, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Torso - mid chest */}
      <mesh position={[0, 1.15, 0]} scale={[1, 1, 0.6]}>
        <sphereGeometry args={[0.17, 24, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Torso - waist */}
      <mesh position={[0, 0.95, 0]} scale={[1, 1, 0.6]}>
        <sphereGeometry args={[0.14, 24, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Torso - lower waist */}
      <mesh position={[0, 0.75, 0]} scale={[1, 1, 0.6]}>
        <sphereGeometry args={[0.15, 24, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Hips */}
      <mesh position={[0, 0.55, 0]} scale={[1, 1, 0.7]}>
        <sphereGeometry args={[0.18, 24, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Upper thighs */}
      <mesh position={[-0.08, 0.25, 0]} scale={[1, 1.2, 1]}>
        <cylinderGeometry args={[0.07, 0.09, 0.35, 16]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.08, 0.25, 0]} scale={[1, 1.2, 1]}>
        <cylinderGeometry args={[0.07, 0.09, 0.35, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Lower thighs */}
      <mesh position={[-0.08, -0.1, 0]} scale={[1, 1.2, 1]}>
        <cylinderGeometry args={[0.06, 0.07, 0.35, 16]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.08, -0.1, 0]} scale={[1, 1.2, 1]}>
        <cylinderGeometry args={[0.06, 0.07, 0.35, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Calves */}
      <mesh position={[-0.08, -0.45, 0]} scale={[1, 1.2, 1]}>
        <cylinderGeometry args={[0.04, 0.06, 0.35, 16]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.08, -0.45, 0]} scale={[1, 1.2, 1]}>
        <cylinderGeometry args={[0.04, 0.06, 0.35, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Feet */}
      <mesh position={[-0.08, -0.72, 0.02]} scale={[0.8, 0.6, 1.5]}>
        <sphereGeometry args={[0.06, 16, 12]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.08, -0.72, 0.02]} scale={[0.8, 0.6, 1.5]}>
        <sphereGeometry args={[0.06, 16, 12]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Shoulders */}
      <mesh position={[-0.16, 1.4, 0]} scale={[1.2, 0.8, 0.8]}>
        <sphereGeometry args={[0.06, 16, 12]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.16, 1.4, 0]} scale={[1.2, 0.8, 0.8]}>
        <sphereGeometry args={[0.06, 16, 12]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Upper arms */}
      <mesh position={[-0.18, 1.15, 0]} scale={[1, 1.5, 1]}>
        <cylinderGeometry args={[0.04, 0.05, 0.25, 16]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.18, 1.15, 0]} scale={[1, 1.5, 1]}>
        <cylinderGeometry args={[0.04, 0.05, 0.25, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Forearms */}
      <mesh position={[-0.18, 0.85, 0]} scale={[1, 1.5, 1]}>
        <cylinderGeometry args={[0.03, 0.04, 0.25, 16]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.18, 0.85, 0]} scale={[1, 1.5, 1]}>
        <cylinderGeometry args={[0.03, 0.04, 0.25, 16]} />
        {silhouetteMaterial}
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.18, 0.65, 0]} scale={[1.2, 1.5, 0.8]}>
        <sphereGeometry args={[0.04, 16, 12]} />
        {silhouetteMaterial}
      </mesh>
      <mesh position={[0.18, 0.65, 0]} scale={[1.2, 1.5, 0.8]}>
        <sphereGeometry args={[0.04, 16, 12]} />
        {silhouetteMaterial}
      </mesh>
    </group>
  );
};

const BodyShapeAvatar3D = ({ measurements }: BodyShapeAvatar3DProps) => {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 1]} intensity={0.8} />
        <pointLight position={[-2, 1, 1]} intensity={0.4} />
        
        {/* 3D Body */}
        <BodyPart measurements={measurements} />
        
        {/* Controls for rotation */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          maxDistance={5}
          minDistance={2}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
      
      {/* Instructions overlay */}
      <div className="relative -top-8 left-4 text-xs text-muted-foreground bg-white/80 px-2 py-1 rounded">
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default BodyShapeAvatar3D;