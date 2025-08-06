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
  
  // Convert measurements to 3D proportions with more realistic scaling
  const proportions = useMemo(() => {
    const baseScale = 0.4;
    const shoulderWidth = (measurements.shoulders / 40) * baseScale;
    const bustWidth = (measurements.bust / 36) * baseScale;
    const waistWidth = (measurements.waist / 28) * baseScale;
    const hipWidth = (measurements.hips / 38) * baseScale;
    const height = (measurements.height / 65) * 2;
    
    return {
      shoulderWidth: Math.max(0.25, shoulderWidth),
      bustWidth: Math.max(0.25, bustWidth),
      waistWidth: Math.max(0.18, waistWidth),
      hipWidth: Math.max(0.25, hipWidth),
      height: Math.max(1.5, height),
    };
  }, [measurements]);

  // Realistic human silhouette material
  const bodyMaterial = <meshLambertMaterial color="#2a2a2a" />;
  const measurementMaterial = (color: string) => <meshBasicMaterial color={color} transparent opacity={0.8} />;

  return (
    <group ref={meshRef}>
      {/* Head - more realistic oval shape */}
      <mesh position={[0, proportions.height * 0.42, 0]}>
        <sphereGeometry args={[0.08, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, proportions.height * 0.36, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.08, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Upper torso - shoulders */}
      <mesh position={[0, proportions.height * 0.28, 0]} scale={[proportions.shoulderWidth, 0.1, 0.15]}>
        <sphereGeometry args={[1, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Chest/Bust area - more rounded */}
      <mesh position={[0, proportions.height * 0.2, 0]} scale={[proportions.bustWidth * 0.9, 0.12, 0.18]}>
        <sphereGeometry args={[1, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Upper waist transition */}
      <mesh position={[0, proportions.height * 0.12, 0]} scale={[proportions.waistWidth * 1.1, 0.08, 0.16]}>
        <sphereGeometry args={[1, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Waist - narrowest point */}
      <mesh position={[0, proportions.height * 0.05, 0]} scale={[proportions.waistWidth, 0.08, 0.14]}>
        <sphereGeometry args={[1, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Hip transition */}
      <mesh position={[0, proportions.height * -0.02, 0]} scale={[proportions.hipWidth * 0.9, 0.08, 0.16]}>
        <sphereGeometry args={[1, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Hips - fuller shape */}
      <mesh position={[0, proportions.height * -0.08, 0]} scale={[proportions.hipWidth, 0.1, 0.18]}>
        <sphereGeometry args={[1, 16, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Upper legs */}
      <mesh position={[-proportions.hipWidth * 0.22, proportions.height * -0.22, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.25, 12]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[proportions.hipWidth * 0.22, proportions.height * -0.22, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.25, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Lower legs */}
      <mesh position={[-proportions.hipWidth * 0.22, proportions.height * -0.4, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.25, 12]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[proportions.hipWidth * 0.22, proportions.height * -0.4, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.25, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Arms - upper */}
      <mesh position={[-proportions.shoulderWidth * 0.55, proportions.height * 0.18, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 0.2, 12]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[proportions.shoulderWidth * 0.55, proportions.height * 0.18, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 0.2, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Arms - lower */}
      <mesh position={[-proportions.shoulderWidth * 0.55, proportions.height * 0.05, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.18, 12]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[proportions.shoulderWidth * 0.55, proportions.height * 0.05, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.18, 12]} />
        {bodyMaterial}
      </mesh>
      
      {/* Measurement indicators - more subtle */}
      {/* Shoulder line */}
      <mesh position={[0, proportions.height * 0.28, 0.11]} scale={[proportions.shoulderWidth * 1.1, 0.005, 0.005]}>
        <boxGeometry args={[1, 1, 1]} />
        {measurementMaterial("#ff6b6b")}
      </mesh>
      
      {/* Bust line */}
      <mesh position={[0, proportions.height * 0.2, 0.11]} scale={[proportions.bustWidth * 1.1, 0.005, 0.005]}>
        <boxGeometry args={[1, 1, 1]} />
        {measurementMaterial("#4ecdc4")}
      </mesh>
      
      {/* Waist line */}
      <mesh position={[0, proportions.height * 0.05, 0.11]} scale={[proportions.waistWidth * 1.1, 0.005, 0.005]}>
        <boxGeometry args={[1, 1, 1]} />
        {measurementMaterial("#45b7d1")}
      </mesh>
      
      {/* Hip line */}
      <mesh position={[0, proportions.height * -0.08, 0.11]} scale={[proportions.hipWidth * 1.1, 0.005, 0.005]}>
        <boxGeometry args={[1, 1, 1]} />
        {measurementMaterial("#96ceb4")}
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