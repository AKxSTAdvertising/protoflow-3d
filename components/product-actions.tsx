"use client";
import {useState} from "react";
import {Product,money,priceForSize} from "@/lib/store";
import {useCart} from "@/components/cart-provider";
import {useRouter} from "next/navigation";

export default function ProductActions({product}:{product:Product}){
 const[size,setSize]=useState(product.sizes[0]);
 const{addItem}=useCart();
 const router=useRouter();
 const price=priceForSize(product,size);

 function add(){
  addItem(product,size);
 }

 function buy(){
  addItem(product,size);
  router.push("/cart");
 }

 return <div className="product-actions">
  <div className="detail-price">{money(price)}</div>
  <div className="size-picker">
   <span>SELECT HEIGHT</span>
   <div>{product.sizes.map(value=><button type="button" key={value} className={size===value?"selected":""} onClick={()=>setSize(value)}>{value}&quot;</button>)}</div>
  </div>
  <p className="price-note">Final price updates instantly with the selected height.</p>
  <button className="primary-wide" type="button" onClick={add}>ADD TO BAG <span>↗</span></button>
  <button className="secondary-wide" type="button" onClick={buy}>BUY NOW</button>
 </div>
}