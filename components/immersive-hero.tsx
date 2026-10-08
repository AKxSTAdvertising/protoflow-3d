"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * .35) * .035;
  });
  return (
    <group ref={group}>
      <mesh position={[0, 1.55, 0]} castShadow>
        <sphereGeometry args={[.57, 64, 64]} />
        <MeshTransmissionMaterial color="#a98b5c" metalness={.72} roughness={.2} transmission={.08} thickness={1.1} />
      </mesh>
      <mesh position={[0, .62, 0]} castShadow>
        <capsuleGeometry args={[.76, 1.7, 16, 64]} />
        <MeshTransmissionMaterial color="#806642" metalness={.82} roughness={.23} transmission={.06} thickness={1.2} />
      </mesh>
      <mesh position={[0, -.55, 0]} receiveShadow>
        <cylinderGeometry args={[1.15, .98, .34, 96]} />
        <meshStandardMaterial color="#30281f" metalness={.8} roughness={.28} />
      </mesh>
      <mesh position={[0, -.82, 0]} receiveShadow>
        <cylinderGeometry args={[1.38, 1.12, .18, 96]} />
        <meshStandardMaterial color="#14110e" metalness={.72} roughness={.3} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, .8, 5.2], fov: 34 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={["#070706"]} />
      <fog attach="fog" args={["#070706", 5, 11]} />
      <ambientLight intensity={.35} />
      <spotLight position={[3, 5, 4]} intensity={70} angle={.34} penumbra={1} color="#fff1d0" castShadow />
      <pointLight position={[-3, 1, 1]} intensity={16} color="#7d5c2d" />
      <pointLight position={[2, -.5, -2]} intensity={9} color="#c38d42" />
      <Float speed={1.2} rotationIntensity={.08} floatIntensity={.18}>
        <Sculpture />
      </Float>
      <Sparkles count={130} scale={[6, 5, 5]} size={1.3} speed={.22} color="#c9a66c" />
      <Environment preset="night" />
    </Canvas>
  );
}

export default function ImmersiveHero() {
  return (
    <section className="immersive-hero">
      <div className="immersive-vignette" />
      <div className="immersive-topline"><span>PROTOFLOW 3D</span><span>OBJECTS / DEVOTION / FORM</span><span>SCROLL ↘</span></div>
      <div className="immersive-copy">
        <p>01 / THE NEW SCULPTURE GALLERY</p>
        <h1>FORM<br /><i>WITH SOUL.</i></h1>
        <div className="immersive-bottom-copy">
          <span>COLLECTIBLE OBJECTS</span>
          <span>HAND-FINISHED / INDIA</span>
        </div>
      </div>
      <div className="immersive-canvas"><Scene /></div>
      <div className="immersive-ring" />
      <div className="immersive-meta"><span>THE MEDITATIVE ONE</span><b>01</b></div>
      <a className="immersive-enter" href="/collections"><span>ENTER GALLERY</span><b>↗</b></a>
      <div className="immersive-scroll"><span>SCROLL</span><i /></div>
    </section>
  );
}
