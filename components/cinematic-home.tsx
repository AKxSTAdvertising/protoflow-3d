"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const slides=[
 {kicker:"01 / THE NEW SCULPTURE GALLERY",title:"FORM",accent:"WITH SOUL.",copy:"A cinematic home for collectible devotional, artistic and decorative forms.",href:"/collections",cta:"ENTER GALLERY"},
 {kicker:"02 / COLLECTIONS",title:"WORLDS",accent:"IN FORM.",copy:"Divine Forms, Buddha, Modern Art and objects chosen for considered spaces.",href:"/collections",cta:"EXPLORE COLLECTIONS"},
 {kicker:"03 / THE CATALOGUE",title:"OBJECTS",accent:"UP CLOSE.",copy:"Browse every piece without leaving the cinematic room. Choose a form, then enter its product space.",href:"/shop",cta:"VIEW CATALOGUE"},
 {kicker:"04 / THE EXPERIENCE",title:"SEE IT",accent:"MOVE IT.",copy:"Interactive 3D viewing, size-based pricing and a product room built around each sculpture.",href:"/shop",cta:"DISCOVER THE SHOP"},
 {kicker:"05 / PROTOFLOW 3D",title:"FIND THE",accent:"PIECE THAT STAYS.",copy:"A quieter way to discover objects with presence.",href:"/contact",cta:"START A CONVERSATION"}
];

function Sculpture({slide}:{slide:number}){
 const group=useRef<THREE.Group>(null);
 useFrame((state,delta)=>{if(!group.current)return;group.current.rotation.y+=delta*(.13+slide*.018);group.current.rotation.x=Math.sin(state.clock.elapsedTime*.45)*.025;group.current.position.y=Math.sin(state.clock.elapsedTime*.7)*.045});
 const scale=slide===2?.86:slide===3?1.08:1;
 const metal=slide===1?"#a98755":slide===2?"#b6a078":"#92744a";
 return <group ref={group} scale={scale}>
  <mesh position={[0,1.45,0]} castShadow><sphereGeometry args={[.56,64,64]}/><meshStandardMaterial color={metal} metalness={.76} roughness={.22}/></mesh>
  <mesh position={[0,.42,0]} castShadow><capsuleGeometry args={[.76,1.65,16,64]}/><meshStandardMaterial color="#5e4b37" metalness={.72} roughness={.28}/></mesh>
  <mesh position={[0,-.65,0]} receiveShadow><cylinderGeometry args={[1.15,.98,.34,96]}/><meshStandardMaterial color="#171411" metalness={.68} roughness={.3}/></mesh>
  <mesh position={[0,-.86,0]} receiveShadow><cylinderGeometry args={[1.4,1.12,.18,96]}/><meshStandardMaterial color="#0c0b0a" metalness={.62} roughness={.34}/></mesh>
 </group>
}
function Scene({slide}:{slide:number}){return <Canvas camera={{position:[0,.75,5.25],fov:35}} dpr={[1,1.7]} gl={{antialias:true,alpha:true}} shadows>
 <color attach="background" args={["#070706"]}/><fog attach="fog" args={["#070706",4.5,12]}/><ambientLight intensity={.3}/>
 <spotLight position={[3.5,5,4]} intensity={75} angle={.34} penumbra={1} color="#fff0d2" castShadow/>
 <pointLight position={[-3,1,1]} intensity={14} color="#8b652f"/><pointLight position={[2,-1,-2]} intensity={8} color="#c18d43"/>
 <Float speed={1.15} rotationIntensity={.08} floatIntensity={.16}><Sculpture slide={slide}/></Float>
 <Sparkles count={125} scale={[6,5,5]} size={1.15} speed={.2} color="#c6a06a"/><Environment preset="night"/>
 </Canvas>}

export default function CinematicHome(){
 const [active,setActive]=useState(0); const lock=useRef(false); const touchStart=useRef<number|null>(null);
 const go=(direction:number)=>{if(lock.current)return;const next=Math.max(0,Math.min(slides.length-1,active+direction));if(next===active)return;lock.current=true;setActive(next);window.setTimeout(()=>{lock.current=false},850)};
 useEffect(()=>{const onWheel=(e:WheelEvent)=>{e.preventDefault();if(Math.abs(e.deltaY)<8)return;go(e.deltaY>0?1:-1)};const onKey=(e:KeyboardEvent)=>{if(e.key==="ArrowDown"||e.key==="ArrowRight")go(1);if(e.key==="ArrowUp"||e.key==="ArrowLeft")go(-1)};window.addEventListener("wheel",onWheel,{passive:false});window.addEventListener("keydown",onKey);return()=>{window.removeEventListener("wheel",onWheel);window.removeEventListener("keydown",onKey)}},[active]);
 const onTouchStart=(e:React.TouchEvent)=>{touchStart.current=e.touches[0]?.clientY??null};
 const onTouchEnd=(e:React.TouchEvent)=>{if(touchStart.current===null)return;const end=e.changedTouches[0]?.clientY??touchStart.current;const delta=touchStart.current-end;touchStart.current=null;if(Math.abs(delta)>45)go(delta>0?1:-1)};
 return <main className="cinematic-home" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
  <div className="cinematic-scene"><div className="cinematic-orbit"/><div className="cinematic-glow"/><div className="cinematic-canvas"><Scene slide={active}/></div><div className="cinematic-vignette"/></div>
  <div className="cinematic-progress"><span>PROTOFLOW 3D</span><div className="cinematic-progress-lines">{slides.map((_,i)=><button key={i} className={i===active?"is-active":""} aria-label={`Go to scene ${i+1}`} onClick={()=>setActive(i)}/>)}</div><span>{String(active+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}</span></div>
  <div className="cinematic-copy" key={active}><p>{slides[active].kicker}</p><h1>{slides[active].title}<br/><i>{slides[active].accent}</i></h1><span>{slides[active].copy}</span><a href={slides[active].href}>{slides[active].cta}<b>↗</b></a></div>
  <div className="cinematic-side"><span>HAND-FINISHED / INDIA</span><span>OBJECTS / DEVOTION / FORM</span></div>
  <div className="cinematic-arrows"><button onClick={()=>go(-1)} disabled={active===0} aria-label="Previous scene">←</button><button onClick={()=>go(1)} disabled={active===slides.length-1} aria-label="Next scene">→</button></div>
  <div className="cinematic-hint"><span>USE MOUSE / TRACKPAD</span><i/><span>TO MOVE BETWEEN SCENES</span></div>
 </main>
}