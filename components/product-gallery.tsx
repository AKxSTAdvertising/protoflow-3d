"use client";
import {useState} from "react";
import ProductViewer from "@/components/product-viewer";
import type {Product} from "@/lib/store";

export default function ProductGallery({product}:{product:Product}){
  const [active,setActive]=useState(0);
  const images=product.images||[];
  return <div className="product-gallery">
    <div className="thumb-rail">
      {[0,1,2].map(i=><button key={i} className={active===i?"active":""} onClick={()=>setActive(i)}>{String(i+1).padStart(2,"0")}</button>)}
      <button className={active===3?"active":""} onClick={()=>setActive(3)}>3D</button>
    </div>
    {active===3?<ProductViewer product={product}/>:<div className="product-main-image">
      {images.length?<img src={images[active%images.length]} alt={product.name}/>:<div className={"product-visual "+product.shape}><div className="mini-sculpture"><span className="mini-head"/><span className="mini-body"/><span className="mini-base"/></div></div>}
      <span className="gallery-count">{images.length?String(active+1).padStart(2,"0")+" / "+String(images.length).padStart(2,"0"):"01 / 03"}</span>
    </div>}
  </div>
}