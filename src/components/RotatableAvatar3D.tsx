import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const AvatarMesh = () => {
  const meshRef = useRef<THREE.Group>(null);
  const [frontTexture, sideTexture] = useTexture([
    '/lovable-uploads/5bb3e4fc-3a75-419e-a173-8ebc2607d65e.png',
    '/lovable-uploads/d048e95b-ed16-4128-85ff-82dd8c79c718.png'
  ]);

  // Auto-rotate when not being manually controlled
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Front view plane */}
      <mesh position={[0, 0, 0.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2, 3]} />
        <meshBasicMaterial 
          map={frontTexture} 
          transparent 
          alphaTest={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Side view plane - rotated 90 degrees */}
      <mesh position={[0.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 3]} />
        <meshBasicMaterial 
          map={sideTexture} 
          transparent 
          alphaTest={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const RotatableAvatar3D = () => {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        
        <AvatarMesh />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={8}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
      
      <div className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
        Click and drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default RotatableAvatar3D;