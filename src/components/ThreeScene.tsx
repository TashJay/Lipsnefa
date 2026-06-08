import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function TechCore() {
  const group = useRef<THREE.Group>(null);
  const scrollY = useRef(0);
  const targetRotation = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      targetRotation.current = window.scrollY * 0.002;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Smoothly interpolate rotation to target based on scroll
      group.current.rotation.y += (targetRotation.current - group.current.rotation.y) * 0.05;
      group.current.rotation.x = state.clock.elapsedTime * 0.05 + targetRotation.current * 0.5;
      
      // Scale pulse
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
      group.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[5, 1.5, 12, 24]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>
      <mesh>
        <torusGeometry args={[3, 0.5, 12, 16]} />
        <meshBasicMaterial color="#d10a10" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 12, 16, 1, true]} />
        <meshBasicMaterial color="#d10a10" wireframe transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 8, 12, 1, true]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function GridFloor() {
  const scrollY = useRef(0);
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.position.z = (scrollY.current * 0.02) % 2; // move floor forward as you scroll
    }
  });

  return (
    <group ref={group}>
      <gridHelper args={[40, 40, '#d10a10', '#333333']} position={[0, -8, 0]}>
        <meshBasicMaterial color="#d10a10" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </gridHelper>
    </group>
  )
}

function DataBlocks() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 40; // Reduced count for performance
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const blockData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30 - 10
      ),
      rot: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      speed: (Math.random() - 0.5) * 2 + 1
    }));
  }, [count]);

  const scrollY = useRef(0);
  const scrollTarget = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollTarget.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    scrollY.current += (scrollTarget.current - scrollY.current) * 0.05; // smooth scroll value

    blockData.forEach((data, i) => {
      const scrollOffset = scrollY.current * 0.01 * data.speed;
      
      dummy.position.copy(data.pos);
      
      // Loop the position based on scroll and time
      dummy.position.y = (((data.pos.y + scrollOffset + Math.sin(state.clock.elapsedTime * 0.2 + i) * 2) + 20) % 40) - 20;
      
      dummy.rotation.copy(data.rot);
      dummy.rotation.x += state.clock.elapsedTime * 0.2 * data.speed;
      dummy.rotation.y += state.clock.elapsedTime * 0.3 * data.speed;
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshBasicMaterial color="#d10a10" wireframe transparent opacity={0.3} />
    </instancedMesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 z-0 bg-transparent pointer-events-none">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <TechCore />
        <DataBlocks />
        <GridFloor />
      </Canvas>
    </div>
  );
}
