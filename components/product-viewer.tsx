"use client";
import {Suspense,useRef,useState} from "react";
import {Canvas,useFrame} from "@react-three/fiber";
import {Environment,OrbitControls,useGLTF,Stage} from "@react-three/drei";
import * as THREE from "three";
import {Product} from "@/lib/store";

function GLBModel({src}:{src:string}){
 const {scene}=useGLTF(src);
 const ref=useRef<THREE.Group>(null);
 useFrame((_,delta)=>{if(ref.current)ref.current.rotation.y+=delta*.12});
 return <group ref={ref}><primitive object={scene}/></group>;
}
function DemoModel(){
 const ref=useRef<THREE.Group>(null);
 useFrame((_,delta)=>{if(ref.current)ref.current.rotation.y+=delta*.12});
 return <group ref={ref}>
  <mesh position={[0,1.65,0]} castShadow><sphereGeometry args={[.62,48,48]}/><meshStandardMaterial color="#9b907f" roughness={.34}/></mesh>
  <mesh position={[0,.65,0]} castShadow><capsuleGeometry args={[.82,1.7,12,40]}/><meshStandardMaterial color="#817768" roughness={.42}/></mesh>
  <mesh position={[0,-.55,0]} receiveShadow><cylinderGeometry args={[1.12,.98,.35,64]}/><meshStandardMaterial color="#5e5549" roughness={.48}/></mesh>
 </group>;
}
function Scene({model}:{model?:string}){
 return <Canvas shadows camera={{position:[0,1.2,5.2],fov:38}} dpr={[1,2]}>
  <ambientLight intensity={1.5}/>
  <directionalLight position={[3,5,4]} intensity={3} castShadow shadow-mapSize={[2048,2048]}/>
  <directionalLight position={[-3,2,-2]} intensity={1.2}/>
  <Suspense fallback={null}><Stage environment="city" intensity={.45} shadows="contact" adjustCamera={false}>{model?<GLBModel src={model}/>:<DemoModel/>}</Stage></Suspense>
  <Environment preset="studio"/>
  <OrbitControls enablePan={false} minDistance={2.8} maxDistance={7} minPolarAngle={Math.PI*.25} maxPolarAngle={Math.PI*.72} enableDamping dampingFactor={.08}/>
 </Canvas>
}
export default function ProductViewer({product}:{product:Product}){
 const [zoom,setZoom]=useState(false);
 return <div className={"viewer viewer-3d "+product.shape+(zoom?" zoomed":"")}>
   <div className="canvas-shell"><Scene model={(product as Product&{model?:string}).model}/></div>
   <div className="viewer-hint">DRAG TO ROTATE · PINCH TO ZOOM</div>
   <span className="viewer-label">PROTOFLOW 3D / {zoom?"CLOSE VIEW":"INTERACTIVE MODEL"}</span>
   <button className="viewer-zoom" onClick={()=>setZoom(v=>!v)}>{zoom?"−":"+"}</button>
 </div>
}