"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
import {Product,priceForSize} from "@/lib/store";

export type CartItem={slug:string;size:number;quantity:number};
type CartContextValue={
 items:CartItem[];
 count:number;
 addItem:(product:Product,size:number)=>void;
 removeItem:(slug:string,size:number)=>void;
 updateQuantity:(slug:string,size:number,quantity:number)=>void;
 clearCart:()=>void;
};

const CartContext=createContext<CartContextValue|null>(null);
const KEY="protoflow-cart";

export function CartProvider({children}:{children:React.ReactNode}){
 const[items,setItems]=useState<CartItem[]>([]);
 const[ready,setReady]=useState(false);

 useEffect(()=>{
  try{
   const raw=localStorage.getItem(KEY);
   if(raw) setItems(JSON.parse(raw));
  }catch{}
  setReady(true);
 },[]);

 useEffect(()=>{
  if(ready) localStorage.setItem(KEY,JSON.stringify(items));
 },[items,ready]);

 const value=useMemo<CartContextValue>(()=>({
  items,
  count:items.reduce((sum,item)=>sum+item.quantity,0),
  addItem:(product,size)=>{
   setItems(current=>{
    const found=current.find(item=>item.slug===product.slug&&item.size===size);
    if(found) return current.map(item=>item===found?{...item,quantity:item.quantity+1}:item);
    return [...current,{slug:product.slug,size,quantity:1}];
   });
  },
  removeItem:(slug,size)=>setItems(current=>current.filter(item=>!(item.slug===slug&&item.size===size))),
  updateQuantity:(slug,size,quantity)=>{
   if(quantity<=0){setItems(current=>current.filter(item=>!(item.slug===slug&&item.size===size)));return;}
   setItems(current=>current.map(item=>item.slug===slug&&item.size===size?{...item,quantity}:item));
  },
  clearCart:()=>setItems([])
 }),[items]);

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(){
 const context=useContext(CartContext);
 if(!context) throw new Error("useCart must be used inside CartProvider");
 return context;
}

export function cartItemProduct(item:CartItem,products:Product[]){
 return products.find(product=>product.slug===item.slug);
}

export function cartItemPrice(item:CartItem,products:Product[]){
 const product=cartItemProduct(item,products);
 return product?priceForSize(product,item.size)*item.quantity:0;
}