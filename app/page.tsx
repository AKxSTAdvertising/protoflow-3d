"use client";

import SiteHeader from "@/components/site-header";
import ProductCard from "@/components/product-card";
import ImmersiveHero from "@/components/immersive-hero";
import ImmersiveShowcase from "@/components/immersive-showcase";
import { products } from "@/lib/store";

export default function Home() {
  const featured = products.slice(0, 6);
  return (
    <main className="home-new">
      <SiteHeader />
      <ImmersiveHero />

      <section className="statement-section">
        <div className="statement-number">02</div>
        <div><p className="micro-label">THE PROTOFLOW POINT OF VIEW</p><h2>Objects made to<br />hold <i>attention.</i></h2></div>
        <p className="statement-copy">Real pieces. Real photographs. One cinematic catalogue built around the objects themselves—not generic stock imagery.</p>
      </section>

      <ImmersiveShowcase />

      <section className="edit-section real-catalog">
        <div className="editorial-heading">
          <div><p className="micro-label">04 / THE CATALOGUE</p><h2>Your pieces.<br /><i>Up close.</i></h2></div>
          <a href="/shop">View full catalogue <span>↗</span></a>
        </div>
        <div className="product-row homepage-product-row">
          {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="experience-new">
        <div className="experience-image">
          <div className="experience-sculpture"><div className="es-head" /><div className="es-body" /><div className="es-base" /></div>
          <span>TURN IT. STUDY IT. LIVE WITH IT.</span>
        </div>
        <div className="experience-text">
          <p className="micro-label">05 / THE PROTOFLOW EXPERIENCE</p>
          <h2>Closer than<br /><i>the showroom.</i></h2>
          <p>Every catalogue piece opens into a focused product room with size-based pricing, gallery imagery and an interactive viewing experience.</p>
          <a href="/shop" className="line-cta">Explore the shop <b>↗</b></a>
        </div>
      </section>

      <section className="final-cta">
        <p className="micro-label">06 / YOUR SPACE</p>
        <h2>Find the piece<br /><i>that stays.</i></h2>
        <a href="/contact">Start a conversation <span>↗</span></a>
      </section>

      <footer className="footer">
        <div className="footer-brand"><span className="wordmark"><span>PROTOFLOW</span><b>3D</b></span><p>Sculptural objects for considered spaces.</p></div>
        <div className="footer-links"><div><span>Explore</span><a href="/collections">Collections</a><a href="/shop">Shop</a><a href="/about">Our Story</a></div><div><span>Studio</span><a href="/contact">Contact</a><a href="/contact">Shipping</a><a href="/contact">Returns</a></div><div><span>Social</span><a href="/contact">Instagram</a><a href="/contact">Pinterest</a></div></div>
        <div className="footer-bottom"><span>© 2026 PROTOFLOW 3D</span><span>Crafted with intention.</span></div>
      </footer>
    </main>
  );
}