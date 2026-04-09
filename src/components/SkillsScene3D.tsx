import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const SkillSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
};

const SkillsScene3D = () => (
  <div className="h-48 w-full md:h-64">
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#e50914" />
      <SkillSphere position={[-2, 0, 0]} color="#e50914" />
      <SkillSphere position={[0, 0, 0]} color="#ff6b6b" />
      <SkillSphere position={[2, 0, 0]} color="#ff4444" />
    </Canvas>
  </div>
);

export default SkillsScene3D;
