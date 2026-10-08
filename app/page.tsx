"use client";


import SiteHeader from "@/components/site-header";
import ProductCard from "@/components/product-card";
import ImmersiveHero from "@/components/immersive-hero";
import { products } from "@/lib/store";

const collections = [
  { no: "01", slug: "divine-forms", name: "Divine Forms", line: "Sacred silhouettes. Quiet power.", art: "collection-art divine" },
  { no: "02", slug: "buddha", name: "Buddha", line: "Stillness, balance, presence.", art: "collection-art buddha" },
  { no: "03", slug: "modern-art", name: "Modern Art", line: "Geometry with a human pulse.", art: "collection-art modern" },
  { no: "04", slug: "home-decor", name: "Home Décor", line: "Objects that anchor a room.", art: "collection-art decor" },
];

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <main className="home-new">
      <SiteHeader />

      <ImmersiveHero />

      <section className="statement-section">
        <div className="statement-number">02</div>
        <div>
          <p className="micro-label">THE PROTOFLOW POINT OF VIEW</p>
          <h2>A room changes<br />when an object has <i>presence.</i></h2>
        </div>
        <p className="statement-copy">We curate sculptural objects where devotion, craft and contemporary form meet. Every piece is selected to be lived with—not simply looked at.</p>
      </section>

      <section className="collection-editorial">
        <div className="editorial-heading">
          <div><p className="micro-label">03 / COLLECTIONS</p><h2>Four ways<br />to <i>feel form.</i></h2></div>
          <a href="/collections">View all collections <span>↗</span></a>
        </div>
        <div className="collection-wall">
          {collections.map((c) => (
            <a className="gallery-tile" href={"/collections/" + c.slug} key={c.slug}>
              <div className={"gallery-art " + c.art}>
                <span className="gallery-art-glow" />
                <span className="gallery-shape one" />
                <span className="gallery-shape two" />
              </div>
              <div className="tile-meta">
                <span>{c.no}</span>
                <div><h3>{c.name}</h3><p>{c.line}</p></div>
                <b>↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="edit-section">
        <div className="editorial-heading">
          <div><p className="micro-label">04 / THE EDIT</p><h2>Pieces worth<br /><i>keeping.</i></h2></div>
          <div className="edit-arrows"><button aria-label="Previous">←</button><button aria-label="Next">→</button></div>
        </div>
        <div className="product-row homepage-product-row">
          {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="experience-new">
        <div className="experience-image">
          <div className="experience-sculpture">
            <div className="es-head" /><div className="es-body" /><div className="es-base" />
          </div>
          <span>TURN IT. STUDY IT. LIVE WITH IT.</span>
        </div>
        <div className="experience-text">
          <p className="micro-label">05 / THE PROTOFLOW EXPERIENCE</p>
          <h2>Closer than<br /><i>the showroom.</i></h2>
          <p>Explore every angle before the piece enters your space. Interactive 3D, cinematic movement and an editorial approach to buying sculpture.</p>
          <a href="/shop" className="line-cta">Explore the shop <b>↗</b></a>
        </div>
      </section>

      <section className="final-cta">
        <p className="micro-label">06 / YOUR SPACE</p>
        <h2>Let the room<br /><i>remember it.</i></h2>
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
