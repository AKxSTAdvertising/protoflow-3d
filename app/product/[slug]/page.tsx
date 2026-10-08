import SiteHeader from "@/components/site-header";
import ProductCard from "@/components/product-card";
import ProductActions from "@/components/product-actions";
import ProductGallery from "@/components/product-gallery";
import {getProduct,products} from "@/lib/store";
import {notFound} from "next/navigation";

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product) notFound();
  const related=products.filter(p=>p.collection===product.collection&&p.slug!==product.slug).slice(0,4);
  return <><SiteHeader/><main className="product-page"><section className="product-detail"><ProductGallery product={product}/><div className="product-info"><p className="eyebrow">{product.category} · {product.finish}</p><h1>{product.name}</h1><p className="detail-description">{product.description}</p><ProductActions product={product}/><div className="detail-notes"><div><b>HAND-FINISHED</b><span>Every surface receives its final character by hand.</span></div><div><b>MADE TO ORDER</b><span>Selected forms are prepared to your chosen scale.</span></div><div><b>3D READY</b><span>Rotate and inspect the model from every angle.</span></div></div></div></section><section className="related-section"><div className="section-head"><div><p className="eyebrow">YOU MAY ALSO LIKE</p><h2>More from this <em>world.</em></h2></div></div><div className="product-row">{related.map(p=><ProductCard key={p.slug} product={p}/>)}</div></section></main></>;
}