"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MotionValue, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { Group, Mesh } from "three";

function FloatingFrame({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !meshRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = mx.get() * 0.2;
    groupRef.current.rotation.x = -my.get() * 0.2;
    groupRef.current.position.y = Math.sin(t) * 0.2;
    meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.2, 3.1, 0.1]} />
        <meshStandardMaterial color="#171717" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2, 2.9]} />
        <meshStandardMaterial color="#5b21b6" emissive="#312e81" />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  return (
    <div
      className="h-[70vh] w-full"
      onMouseMove={(e) => {
        const rx = e.clientX / window.innerWidth - 0.5;
        const ry = e.clientY / window.innerHeight - 0.5;
        mx.set(rx);
        my.set(ry);
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[2, 3, 2]} intensity={1.5} />
        <FloatingFrame mx={mx} my={my} />
      </Canvas>
    </div>
  );
}
