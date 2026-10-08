"use client";
import SiteHeader from "@/components/site-header";
import {products,money,priceForSize} from "@/lib/store";
import {useCart} from "@/components/cart-provider";

export default function CartPage(){
 const{items,count,removeItem,updateQuantity,clearCart}=useCart();
 const total=items.reduce((sum,item)=>{
  const product=products.find(p=>p.slug===item.slug);
  return sum+(product?priceForSize(product,item.size)*item.quantity:0);
 },0);

 if(!items.length) return <><SiteHeader/><main className="empty-page"><p className="eyebrow">YOUR BAG</p><h1>Your collection<br/><em>starts here.</em></h1><p>Your bag is currently empty. Explore the edit and choose a form that belongs in your space.</p><a className="button button-dark" href="/shop">Explore the shop ↗</a></main></>;

 return <><SiteHeader/><main className="cart-page">
  <div className="cart-heading"><div><p className="eyebrow">YOUR BAG · {count} {count===1?"ITEM":"ITEMS"}</p><h1>Objects chosen<br/><em>for your space.</em></h1></div><button className="cart-clear" onClick={clearCart}>CLEAR BAG</button></div>
  <section className="cart-layout">
   <div className="cart-list">{items.map(item=>{
    const product=products.find(p=>p.slug===item.slug);
    if(!product)return null;
    const line=priceForSize(product,item.size)*item.quantity;
    return <article className="cart-item" key={item.slug+"-"+item.size}>
     <a className={"cart-art "+product.shape} href={"/product/"+product.slug}><div className="mini-sculpture"><span className="mini-head"/><span className="mini-body"/><span className="mini-base"/></div></a>
     <div className="cart-item-info"><p className="eyebrow">{product.category} · {product.finish}</p><h2><a href={"/product/"+product.slug}>{product.name}</a></h2><span>Height · {item.size}&quot;</span><strong>{money(line)}</strong>
      <div className="quantity"><button onClick={()=>updateQuantity(item.slug,item.size,item.quantity-1)}>−</button><span>{item.quantity}</span><button onClick={()=>updateQuantity(item.slug,item.size,item.quantity+1)}>+</button><button className="remove" onClick={()=>removeItem(item.slug,item.size)}>REMOVE</button></div>
     </div>
    </article>
   })}</div>
   <aside className="cart-summary"><p className="eyebrow">SUMMARY</p><div><span>Subtotal</span><strong>{money(total)}</strong></div><div><span>Shipping</span><span>Calculated at checkout</span></div><div className="cart-total"><span>Total</span><strong>{money(total)}</strong></div><button className="primary-wide" onClick={()=>alert("Checkout will be connected in the next phase.")}>PROCEED TO CHECKOUT <span>↗</span></button><a className="continue-shopping" href="/shop">Continue shopping</a></aside>
  </section>
 </main></>;
}