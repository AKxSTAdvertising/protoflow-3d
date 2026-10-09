"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const slides = [
  { kicker: "01 / PREMIUM 3D SCULPTURES & DECOR", title: "TIMELESS ART.", accent: "DIVINE ENERGY.", copy: "Discover collectible devotional sculptures and statement forms, crafted to bring presence to your space.", href: "/collections", cta: "EXPLORE COLLECTIONS" },
  { kicker: "02 / CURATED WORLDS", title: "A WORLD", accent: "IN EVERY FORM.", copy: "From sacred icons to modern art, explore collections chosen for the spaces and stories that matter.", href: "/collections", cta: "DISCOVER THE GALLERY" },
  { kicker: "03 / THE COLLECTION", title: "MEET YOUR", accent: "NEXT HEIRLOOM.", copy: "Explore the catalogue, compare sizes and find the sculpture that feels made for your space.", href: "/shop", cta: "SHOP ALL SCULPTURES" },
  { kicker: "04 / INTERACTIVE OBJECTS", title: "LOOK CLOSER.", accent: "TURN THE FORM.", copy: "Explore the details and choose a size before your sculpture finds its place at home.", href: "/shop", cta: "EXPERIENCE THE OBJECTS" },
  { kicker: "05 / PROTOFLOW 3D", title: "MADE TO", accent: "STAY WITH YOU.", copy: "Objects with meaning. Forms with presence. A more considered way to bring art into everyday life.", href: "/contact", cta: "TALK TO OUR STUDIO" }
];

function Palace() {
  return <group position={[0, 0, -3.6]}>
    <mesh position={[0, -1.55, -1]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[24, 20]} /><meshStandardMaterial color="#211913" metalness={0.25} roughness={0.38} />
    </mesh>
    {[-4.4, -2.8, 2.8, 4.4].map((x, i) => <group key={i} position={[x, 0, i % 2 ? -.1 : .45]}>
      <mesh position={[0, .1, 0]}><cylinderGeometry args={[.27, .38, 4.5, 32]} /><meshStandardMaterial color="#4d3828" metalness={.35} roughness={.36} /></mesh>
      <mesh position={[0, 2.37, 0]}><cylinderGeometry args={[.42, .42, .18, 32]} /><meshStandardMaterial color="#b08a59" metalness={.72} roughness={.25} /></mesh>
      <mesh position={[0, -2.15, 0]}><cylinderGeometry args={[.48, .5, .25, 32]} /><meshStandardMaterial color="#806344" metalness={.6} roughness={.28} /></mesh>
    </group>)}
    <mesh position={[0, 1.1, -1.9]}><torusGeometry args={[2.05, .035, 12, 100]} /><meshStandardMaterial color="#a77c43" metalness={.7} roughness={.28} /></mesh>
  </group>;
}

function Ganesha({ slide }: { slide: number }) {
  const root = useRef<THREE.Group>(null);
  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(.02, 1.02, .34), new THREE.Vector3(.1, .78, .52),
    new THREE.Vector3(.18, .48, .58), new THREE.Vector3(.04, .35, .61),
    new THREE.Vector3(-.12, .42, .61)
  ]);
  useFrame((state) => {
    if (!root.current) return;
    root.current.rotation.y = Math.sin(state.clock.elapsedTime * .25) * .18;
    root.current.position.y = -.12 + Math.sin(state.clock.elapsedTime * .8) * .035;
    root.current.scale.setScalar(slide === 2 ? .95 : slide === 3 ? 1.08 : 1);
  });
  const metal = "#b88b50", light = "#d3b47b";
  return <group ref={root} position={[0, -.12, 0]}>
    <mesh position={[0, -.38, 0]} castShadow scale={[.78, .63, .55]}><sphereGeometry args={[1, 48, 32]} /><meshStandardMaterial color={metal} metalness={.72} roughness={.27} /></mesh>
    <mesh position={[-.38, -.78, .18]} castShadow scale={[.56, .24, .5]} rotation={[0, 0, -.12]}><sphereGeometry args={[1, 40, 28]} /><meshStandardMaterial color={light} metalness={.72} roughness={.28} /></mesh>
    <mesh position={[.38, -.78, .18]} castShadow scale={[.56, .24, .5]} rotation={[0, 0, .12]}><sphereGeometry args={[1, 40, 28]} /><meshStandardMaterial color={light} metalness={.72} roughness={.28} /></mesh>
    <mesh position={[-.62, .04, .02]} castShadow rotation={[0, 0, -.36]} scale={[.25, .68, .28]}><capsuleGeometry args={[.48, .7, 8, 24]} /><meshStandardMaterial color={metal} metalness={.74} roughness={.26} /></mesh>
    <mesh position={[.62, .04, .02]} castShadow rotation={[0, 0, .36]} scale={[.25, .68, .28]}><capsuleGeometry args={[.48, .7, 8, 24]} /><meshStandardMaterial color={metal} metalness={.74} roughness={.26} /></mesh>
    <mesh position={[-.67, 1.02, -.02]} rotation={[0, 0, -.18]} scale={[.48, .58, .2]} castShadow><sphereGeometry args={[1, 40, 32]} /><meshStandardMaterial color={metal} metalness={.72} roughness={.26} /></mesh>
    <mesh position={[.67, 1.02, -.02]} rotation={[0, 0, .18]} scale={[.48, .58, .2]} castShadow><sphereGeometry args={[1, 40, 32]} /><meshStandardMaterial color={metal} metalness={.72} roughness={.26} /></mesh>
    <mesh position={[0, 1.08, .08]} scale={[.64, .72, .52]} castShadow><sphereGeometry args={[1, 64, 48]} /><meshStandardMaterial color={light} metalness={.7} roughness={.24} /></mesh>
    <mesh castShadow><tubeGeometry args={[trunkCurve, 36, .105, 16, false]} /><meshStandardMaterial color="#d7b985" metalness={.8} roughness={.2} /></mesh>
    {[-.27, .27].map((x) => <group key={x}>
      <mesh position={[x, 1.17, .545]} scale={[.105, .045, .035]}><sphereGeometry args={[1, 24, 16]} /><meshStandardMaterial color="#24160e" roughness={.25} /></mesh>
      <mesh position={[x * 1.4, .65, .48]} rotation={[0, 0, x < 0 ? -.2 : .2]}><coneGeometry args={[.085, .34, 24]} /><meshStandardMaterial color="#f0dcb1" metalness={.62} roughness={.2} /></mesh>
    </group>)}
    <mesh position={[0, 1.48, .48]}><sphereGeometry args={[.085, 24, 24]} /><meshStandardMaterial color="#8d52ff" emissive="#5a23c4" emissiveIntensity={.4} metalness={.25} roughness={.2} /></mesh>
    <mesh position={[0, 1.72, -.01]} castShadow><cylinderGeometry args={[.42, .57, .18, 48]} /><meshStandardMaterial color={metal} metalness={.82} roughness={.22} /></mesh>
    <mesh position={[0, 1.94, -.01]} castShadow><cylinderGeometry args={[.32, .45, .27, 48]} /><meshStandardMaterial color={light} metalness={.82} roughness={.2} /></mesh>
    <mesh position={[0, 2.18, -.01]} castShadow><coneGeometry args={[.32, .38, 48]} /><meshStandardMaterial color={metal} metalness={.82} roughness={.2} /></mesh>
    <mesh position={[0, 2.42, -.01]}><sphereGeometry args={[.09, 24, 24]} /><meshStandardMaterial color="#e6c98f" metalness={.85} roughness={.18} /></mesh>
    {[.05, -.1, -.25].map((y, i) => <mesh key={i} position={[0, y, .51]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[.3 + i * .045, .025, 8, 48, Math.PI]} /><meshStandardMaterial color="#e0bd7d" metalness={.85} roughness={.2} /></mesh>)}
    <mesh position={[0, -1.18, 0]} castShadow><cylinderGeometry args={[.95, 1.05, .2, 64]} /><meshStandardMaterial color="#241a13" metalness={.7} roughness={.26} /></mesh>
    <mesh position={[0, -1.31, 0]} castShadow><cylinderGeometry args={[1.13, 1.16, .13, 64]} /><meshStandardMaterial color="#b38b53" metalness={.8} roughness={.22} /></mesh>
    <mesh position={[0, -1.43, 0]} castShadow><cylinderGeometry args={[1.22, 1.24, .13, 64]} /><meshStandardMaterial color="#292019" metalness={.65} roughness={.3} /></mesh>
  </group>;
}

function Scene({ slide }: { slide: number }) {
  return <Canvas camera={{ position: [0, .68, 7.6], fov: 34 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }} shadows>
    <color attach="background" args={["#100b08"]} /><fog attach="fog" args={["#100b08", 7, 16]} />
    <ambientLight intensity={.55} />
    <spotLight position={[3.5, 6, 5]} intensity={115} angle={.38} penumbra={1} color="#ffe1ad" castShadow />
    <spotLight position={[-4, 4, -1]} intensity={65} angle={.48} penumbra={.8} color="#e4a15a" />
    <pointLight position={[-3, 1, 2]} intensity={18} color="#80502b" /><pointLight position={[2, -1, -2]} intensity={14} color="#a46c32" />
    <Palace /><Float speed={1.05} rotationIntensity={.035} floatIntensity={.09}><Ganesha slide={slide} /></Float>
    <ContactShadows position={[0, -1.55, 0]} opacity={.45} scale={8} blur={2.8} far={4} />
    <Sparkles count={100} scale={[7, 6, 5]} size={1.05} speed={.15} color="#e6bf82" /><Environment preset="sunset" />
  </Canvas>;
}

export default function CinematicHome() {
  const [active, setActive] = useState(0);
  const lock = useRef(false);
  const touchStart = useRef<number | null>(null);
  const go = (direction: number) => {
    if (lock.current) return;
    const next = Math.max(0, Math.min(slides.length - 1, active + direction));
    if (next === active) return;
    lock.current = true; setActive(next);
    window.setTimeout(() => { lock.current = false; }, 850);
  };
  useEffect(() => {
    const onWheel = (e: WheelEvent) => { e.preventDefault(); if (Math.abs(e.deltaY) < 8) return; go(e.deltaY > 0 ? 1 : -1); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "ArrowDown" || e.key === "ArrowRight") go(1); if (e.key === "ArrowUp" || e.key === "ArrowLeft") go(-1); };
    window.addEventListener("wheel", onWheel, { passive: false }); window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("wheel", onWheel); window.removeEventListener("keydown", onKey); };
  }, [active]);
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0]?.clientY ?? null; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const end = e.changedTouches[0]?.clientY ?? touchStart.current, delta = touchStart.current - end;
    touchStart.current = null; if (Math.abs(delta) > 45) go(delta > 0 ? 1 : -1);
  };
  return <main className="cinematic-home" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    <div className="cinematic-scene"><div className="cinematic-orbit" /><div className="cinematic-glow" /><div className="cinematic-canvas"><Scene slide={active} /></div><div className="cinematic-vignette" /></div>
    <div className="cinematic-progress"><span>PROTOFLOW 3D</span><div className="cinematic-progress-lines">{slides.map((_, i) => <button key={i} className={i === active ? "is-active" : ""} aria-label={`Go to scene ${i + 1}`} onClick={() => setActive(i)} />)}</div><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
    <div className="cinematic-copy" key={active}><p>{slides[active].kicker}</p><h1>{slides[active].title}<br /><i>{slides[active].accent}</i></h1><span>{slides[active].copy}</span><a href={slides[active].href}>{slides[active].cta}<b>↗</b></a></div>
    <div className="cinematic-side"><span>HAND-FINISHED / INDIA</span><span>OBJECTS / DEVOTION / FORM</span></div>
    <div className="cinematic-arrows"><button onClick={() => go(-1)} disabled={active === 0} aria-label="Previous scene">←</button><button onClick={() => go(1)} disabled={active === slides.length - 1} aria-label="Next scene">→</button></div>
    <div className="cinematic-hint"><span>USE MOUSE / TRACKPAD</span><i /><span>TO MOVE BETWEEN SCENES</span></div>
  </main>;
}