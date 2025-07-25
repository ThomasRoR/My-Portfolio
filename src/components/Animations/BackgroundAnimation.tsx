import * as THREE from 'three';
import { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function BackgroundParticles() {
  const particleCount = 2000;

  const positions = useMemo(() => {
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    return posArray;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (state.scene.children[0]) {
      state.scene.children[0].rotation.y += delta * 0.05;
      state.scene.children[0].rotation.x += delta * 0.025;
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
        size={0.015}
        color="#8A2BE2"
        transparent
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </points>
  );
}

export function BackgroundAnimation() {
  return (
    <div id="background-canvas">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <BackgroundParticles />
      </Canvas>
    </div>
  );
}