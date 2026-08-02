import { useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import type { Group } from "three";

function Plate(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 0.92, 0.06, 96]} />
        <meshPhysicalMaterial color="#f3ece1" roughness={0.35} clearcoat={0.6} sheen={0.4} />
      </mesh>
      <mesh position={[0, 0.045, 0]}>
        <torusGeometry args={[0.86, 0.012, 24, 120]} />
        <meshStandardMaterial color="#c9a24a" metalness={1} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0.12, 0]} castShadow>
        <sphereGeometry args={[0.2, 48, 48]} />
        <meshPhysicalMaterial color="#3a2418" roughness={0.15} clearcoat={1} />
      </mesh>
    </group>
  );
}

function Ring({ radius = 2.1 }: { radius?: number }) {
  const ref = useRef<Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.z += d * 0.06;
  });
  return (
    <group ref={ref} rotation={[Math.PI / 2.2, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 16, 200]} />
        <meshStandardMaterial color="#c9a24a" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Scene() {
  const group = useRef<Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * delta * 1.6;
    group.current.rotation.x += (-pointer.y * 0.22 - group.current.rotation.x) * delta * 1.6;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.7}>
        <Plate position={[0, 0, 0]} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh position={[1.75, 0.75, -0.6]} castShadow>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#c9a24a" metalness={0.9} roughness={0.25} />
        </mesh>
      </Float>
      <Float speed={1.9} rotationIntensity={0.5} floatIntensity={1.3}>
        <mesh position={[-1.85, -0.5, 0.4]} castShadow>
          <dodecahedronGeometry args={[0.17, 0]} />
          <meshStandardMaterial color="#8c5a33" metalness={0.4} roughness={0.4} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.9}>
        <mesh position={[1.3, -0.9, 0.7]} castShadow>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshStandardMaterial color="#e8dccb" roughness={0.6} />
        </mesh>
      </Float>
      <Ring />
    </group>
  );
}

export default function DiningScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      shadows
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 1.6, 4.2], fov: 42 }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 3]} intensity={2.1} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#f0c27a" />
      <spotLight position={[0, 5, 2]} angle={0.5} penumbra={1} intensity={12} color="#ffd9a0" />
      <Scene />
      <ContactShadows position={[0, -1.35, 0]} opacity={0.32} scale={9} blur={3.2} far={4} />
    </Canvas>
  );
}
