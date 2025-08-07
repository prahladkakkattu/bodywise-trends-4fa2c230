import { useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const AvatarMesh = () => {
  const [frontTexture, sideTexture] = useTexture([
    '/lovable-uploads/5bb3e4fc-3a75-419e-a173-8ebc2607d65e.png',
    '/lovable-uploads/d048e95b-ed16-4128-85ff-82dd8c79c718.png'
  ]);

  return (
    <group rotation={[0, Math.PI / 6, 0]}>
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
      </Canvas>
    </div>
  );
};

export default RotatableAvatar3D;