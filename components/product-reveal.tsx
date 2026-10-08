"use client";
import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";

export default function ProductReveal({slug}:{slug:string}){
 const router=useRouter(); const[active,setActive]=useState(false);
 useEffect(()=>{const stop=(e:Event)=>e.stopPropagation();return()=>{}},[]);
 const open=(e:React.MouseEvent)=>{e.preventDefault(); if(active)return; setActive(true); setTimeout(()=>router.push("/product/"+slug),3000)};
 return <button className={active?"reveal-trigger reveal-active":"reveal-trigger"} onClick={open} aria-label="View product">
   <span className="reveal-scene"><i className="reveal-halo"/><i className="reveal-shadow"/><i className="reveal-object"><b/><b/><b/></i></span>
   <span className="reveal-overlay"><small>EXPLORE FORM</small><strong>↗</strong></span>
 </button>
}