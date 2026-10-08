"use client";
import {useState} from "react";
import {useCart} from "@/components/cart-provider";

export default function SiteHeader(){
 const[open,setOpen]=useState(false);
 const{count}=useCart();
 return <><div className="announcement">HAND-FINISHED FORMS · MADE TO STAY</div><header className="nav">
  <a className="wordmark" href="/" aria-label="Protoflow 3D home"><span>PROTOFLOW</span><b>3D</b></a>
  <nav className={open?"nav-links open":"nav-links"}><a href="/collections" onClick={()=>setOpen(false)}>Collections</a><a href="/shop" onClick={()=>setOpen(false)}>Shop</a><a href="/about" onClick={()=>setOpen(false)}>Our Story</a><a href="/contact" onClick={()=>setOpen(false)}>Contact</a></nav>
  <div className="nav-actions"><button className="icon-button" aria-label="Search">⌕</button><a className="bag" href="/cart">Bag <span>{count}</span></a><button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-label={open?"Close menu":"Open menu"}><i/><i/></button></div>
 </header></>;
}