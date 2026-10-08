"use client";
import {useState} from "react";
import {Product,money} from "@/lib/store";
import ProductReveal from "@/components/product-reveal";

export default function ProductCard({product}:{product:Product}){
 const[image,setImage]=useState(0);
 const images=product.images||[];
 const hasImages=images.length>0;
 const next=()=>setImage((image+1)%Math.max(images.length,3));
 const prev=()=>setImage((image-1+Math.max(images.length,3))%Math.max(images.length,3));
 return <article className="product-card">
  <div className="product-visual-link">
   <div className={"product-visual "+product.shape+" image-"+image}>
    <ProductReveal slug={product.slug}/>
    {hasImages ? <img className="product-card-image" src={images[image%images.length]} alt={product.name} /> :
      <a href={"/product/"+product.slug} className="mini-sculpture-link"><div className="mini-sculpture"><span className="mini-head"/><span className="mini-body"/><span className="mini-base"/></div></a>}
    <button className="image-arrow left" onClick={e=>{e.preventDefault();prev()}} aria-label="Previous image">‹</button>
    <button className="image-arrow right" onClick={e=>{e.preventDefault();next()}} aria-label="Next image">›</button>
    {product.newArrival&&<span className="product-badge">NEW</span>}
    <span className="product-index">0{image+1}</span>
   </div>
  </div>
  <div className="product-meta"><div><h3><a href={"/product/"+product.slug}>{product.name}</a></h3><p>{product.category} · {product.finish}</p></div><strong>{money(product.price)}</strong></div>
 </article>
}