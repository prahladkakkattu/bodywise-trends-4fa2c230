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
  
  // Convert measurements to 3D proportions
  const proportions = useMemo(() => {
    const baseScale = 0.5;
    const shoulderWidth = (measurements.shoulders / 40) * baseScale;
    const bustWidth = (measurements.bust / 36) * baseScale;
    const waistWidth = (measurements.waist / 28) * baseScale;
    const hipWidth = (measurements.hips / 38) * baseScale;
    const height = (measurements.height / 65) * 2;
    
    return {
      shoulderWidth: Math.max(0.3, shoulderWidth),
      bustWidth: Math.max(0.3, bustWidth),
      waistWidth: Math.max(0.2, waistWidth),
      hipWidth: Math.max(0.3, hipWidth),
      height: Math.max(1.5, height),
    };
  }, [measurements]);

  return (
    <group ref={meshRef}>
      {/* Head */}
      <mesh position={[0, proportions.height * 0.45, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshPhongMaterial color="#8B7355" />
      </mesh>
      
      {/* Torso - upper (shoulders/bust area) */}
      <mesh position={[0, proportions.height * 0.25, 0]} scale={[proportions.shoulderWidth, 0.15, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#A0856B" />
      </mesh>
      
      {/* Torso - middle (bust area) */}
      <mesh position={[0, proportions.height * 0.15, 0]} scale={[proportions.bustWidth, 0.12, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#A0856B" />
      </mesh>
      
      {/* Torso - waist */}
      <mesh position={[0, proportions.height * 0.05, 0]} scale={[proportions.waistWidth, 0.1, 0.18]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#A0856B" />
      </mesh>
      
      {/* Hips */}
      <mesh position={[0, proportions.height * -0.05, 0]} scale={[proportions.hipWidth, 0.12, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#A0856B" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-proportions.shoulderWidth * 0.6, proportions.height * 0.2, 0]} scale={[0.08, 0.3, 0.08]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshPhongMaterial color="#8B7355" />
      </mesh>
      <mesh position={[proportions.shoulderWidth * 0.6, proportions.height * 0.2, 0]} scale={[0.08, 0.3, 0.08]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshPhongMaterial color="#8B7355" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-proportions.hipWidth * 0.25, proportions.height * -0.25, 0]} scale={[0.1, 0.4, 0.1]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshPhongMaterial color="#8B7355" />
      </mesh>
      <mesh position={[proportions.hipWidth * 0.25, proportions.height * -0.25, 0]} scale={[0.1, 0.4, 0.1]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshPhongMaterial color="#8B7355" />
      </mesh>
      
      {/* Measurement indicators */}
      {/* Shoulder line */}
      <mesh position={[0, proportions.height * 0.25, 0.12]} scale={[proportions.shoulderWidth * 1.1, 0.01, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ff6b6b" />
      </mesh>
      
      {/* Bust line */}
      <mesh position={[0, proportions.height * 0.15, 0.12]} scale={[proportions.bustWidth * 1.1, 0.01, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#4ecdc4" />
      </mesh>
      
      {/* Waist line */}
      <mesh position={[0, proportions.height * 0.05, 0.12]} scale={[proportions.waistWidth * 1.1, 0.01, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#45b7d1" />
      </mesh>
      
      {/* Hip line */}
      <mesh position={[0, proportions.height * -0.05, 0.12]} scale={[proportions.hipWidth * 1.1, 0.01, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#96ceb4" />
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