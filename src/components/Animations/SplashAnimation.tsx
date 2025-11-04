import * as THREE from 'three';
import { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Particles() {
  const particleCount = 5000;
  const positions = useMemo(() => {
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    return posArray;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (state.scene.children[0]) {
      state.scene.children[0].rotation.y += delta * 0.1;
      state.scene.children[0].rotation.x += delta * 0.05;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8A2BE2"
        transparent
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface SplashAnimationProps {
  isVisible: boolean;
}

export function SplashAnimation({ isVisible }: SplashAnimationProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black z-50 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
