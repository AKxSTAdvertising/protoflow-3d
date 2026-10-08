"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Form({variant=0}:{variant?:number}) {
  const g=useRef<THREE.Group>(null);
  useFrame((s,d)=>{if(g.current){g.current.rotation.y+=d*(.12+variant*.025);g.current.position.y=Math.sin(s.clock.elapsedTime*.6+variant)*.04}});
  return <group ref={g}>
    <mesh position={[0,1.2,0]} castShadow><sphereGeometry args={[.48+(variant*.04),64,64]}/><meshStandardMaterial color={variant===1?"#b88a4d":"#8d744f"} metalness={.72} roughness={.24}/></mesh>
    <mesh position={[0,.15,0]} castShadow rotation={[0,0,variant*.12]}><capsuleGeometry args={[.7+(variant*.05),1.55,16,64]}/><meshStandardMaterial color="#5b4935" metalness={.78} roughness={.27}/></mesh>
    <mesh position={[0,-.88,0]} receiveShadow><cylinderGeometry args={[1.15,1.02,.3,80]}/><meshStandardMaterial color="#181512" metalness={.65} roughness={.32}/></mesh>
  </group>
}
function Scene({variant}:{variant:number}){return <Canvas camera={{position:[0,.5,4.8],fov:34}} dpr={[1,2]} shadows><color attach="background" args={["#0a0908"]}/><fog attach="fog" args={["#0a0908",4,10]}/><ambientLight intensity={.28}/><spotLight position={[3,4,3]} intensity={55} angle={.35} penumbra={1} color="#fff0d2"/><pointLight position={[-3,1,1]} intensity={10} color="#9b6b2d"/><Float speed={1} floatIntensity={.12}><Form variant={variant}/></Float><Sparkles count={90} scale={[6,5,4]} size={1} speed={.2} color="#bd9559"/><Environment preset="night"/><OrbitControls enablePan={false} minDistance={3.2} maxDistance={6.5}/></Canvas>}

export default function ImmersiveShowcase(){
 return <section className="showcase-flow">
   <div className="showcase-intro"><span>03 / THE COLLECTION ROOMS</span><h2>Enter the<br/><i>worlds.</i></h2><p>Not shelves. Not grids. A changing landscape of sculptural forms.</p></div>
   <div className="room room-01"><div className="room-canvas"><Scene variant={0}/></div><div className="room-copy"><span>01 — DIVINE FORMS</span><h3>Made for<br/><i>presence.</i></h3><p>Sacred silhouettes, softened edges and objects designed to command a quiet corner.</p><a href="/collections/divine-forms">ENTER ROOM ↗</a></div></div>
   <div className="room room-02"><div className="room-copy"><span>02 — BUDDHA</span><h3>Stillness<br/><i>made visible.</i></h3><p>Forms built around balance, meditation and the space between movement and rest.</p><a href="/collections/buddha">ENTER ROOM ↗</a></div><div className="room-canvas"><Scene variant={1}/></div></div>
   <div className="room room-03"><div className="room-canvas"><Scene variant={2}/></div><div className="room-copy"><span>03 — MODERN ART</span><h3>Geometry<br/><i>with pulse.</i></h3><p>Contemporary studies that bring tension, rhythm and character into a room.</p><a href="/collections/modern-art">ENTER ROOM ↗</a></div></div>
 </section>
}