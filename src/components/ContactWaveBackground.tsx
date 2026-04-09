import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FlowingWaves = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { geometry, shader } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(16, 10, 200, 120);

    const vertexShader = `
      uniform float uTime;
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        // Multiple wave layers for organic flowing effect
        float wave1 = sin(pos.x * 0.8 + uTime * 0.4) * cos(pos.y * 0.6 + uTime * 0.3) * 0.5;
        float wave2 = sin(pos.x * 1.5 - uTime * 0.6) * sin(pos.y * 1.2 + uTime * 0.5) * 0.25;
        float wave3 = cos(pos.x * 0.3 + pos.y * 0.5 + uTime * 0.2) * 0.6;
        float wave4 = sin(length(pos.xy) * 0.8 - uTime * 0.3) * 0.3;
        
        pos.z = wave1 + wave2 + wave3 + wave4;
        vElevation = pos.z;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        // Purple to blue gradient inspired by the reference
        vec3 purple = vec3(0.45, 0.1, 0.9);
        vec3 blue = vec3(0.2, 0.3, 1.0);
        vec3 dark = vec3(0.02, 0.02, 0.08);
        
        float mixVal = smoothstep(-0.8, 0.8, vElevation);
        vec3 color = mix(blue, purple, mixVal);
        
        // Add glow on peaks
        float glow = smoothstep(0.2, 0.8, vElevation) * 0.6;
        color += glow * vec3(0.5, 0.2, 1.0);
        
        // Fade edges to dark
        float edgeFade = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
        edgeFade *= smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
        
        color = mix(dark, color, edgeFade * 0.7);
        
        // Wire-like line effect
        float lineX = abs(sin(vUv.x * 80.0 + vElevation * 3.0));
        float lineY = abs(sin(vUv.y * 50.0 + vElevation * 2.0));
        float lines = smoothstep(0.96, 1.0, lineX) + smoothstep(0.97, 1.0, lineY);
        color += lines * vec3(0.4, 0.15, 0.8) * 0.4;
        
        float alpha = edgeFade * 0.65;
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const shaderData = {
      uniforms: { uTime: { value: 0 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    };

    return { geometry: geo, shader: shaderData };
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-0.6, 0.1, 0.15]} position={[0, -0.5, 0]}>
      <shaderMaterial ref={materialRef} attach="material" {...shader} />
    </mesh>
  );
};

const FloatingParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const ContactWaveBackground = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 3, 5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#3b82f6" />
      <FlowingWaves />
      <FloatingParticles />
    </Canvas>
  </div>
);

export default ContactWaveBackground;
