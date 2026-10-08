"use client";

import { useEffect, useRef } from "react";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/store";

const collections = [
  { no: "01", name: "Divine Forms", desc: "Sacred sculptures with quiet presence." },
  { no: "02", name: "Buddha", desc: "Stillness, balance and contemplative form." },
  { no: "03", name: "Modern Art", desc: "Sculptural pieces for contemporary spaces." },
  { no: "04", name: "Home Décor", desc: "Objects designed to become focal points." },
];

const featured = [
  { name: "The Meditative One", type: "Buddha · Stone Finish", price: "₹2,850", shape: "figure-a" },
  { name: "Eternal Gaze", type: "Devotional · Antique Finish", price: "₹3,450", shape: "figure-b" },
  { name: "The Union", type: "Couple Sculpture · Ivory", price: "₹2,950", shape: "figure-c" },
  { name: "Arc of Silence", type: "Modern Art · Bronze", price: "₹4,200", shape: "figure-d" },
  { name: "Temple Form", type: "Decorative · Sandstone", price: "₹2,250", shape: "figure-e" },
  { name: "The Guardian", type: "Devotional · Charcoal", price: "₹3,900", shape: "figure-f" },
];

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      node.style.setProperty("--mx", x.toFixed(3));
      node.style.setProperty("--my", y.toFixed(3));
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main>
      <div className="announcement">HAND-FINISHED FORMS · MADE TO STAY</div>

      <header className="nav">
        <a className="wordmark" href="/" aria-label="Protoflow 3D home"><span>PROTOFLOW</span><b>3D</b></a>
        <nav className="nav-links"><a href="/collections">Collections</a><a href="/shop">Shop</a><a href="/about">Our Story</a><a href="/contact">Contact</a></nav>
        <div className="nav-actions"><button aria-label="Search" className="icon-button">⌕</button><a className="bag" href="/cart">Bag <span>0</span></a><button className="menu-button" aria-label="Open menu"><i/><i/></button></div>
      </header>

      <section className="hero" ref={stageRef}>
        <div className="hero-copy">
          <p className="eyebrow">THE ART OF FORM</p>
          <h1>
            Objects with
            <em>presence.</em>
          </h1>
          <p className="hero-text">
            Sculptural pieces shaped for spaces that value stillness,
            craftsmanship and character.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/shop">Explore collection <span>↗</span></a>
            <a className="text-link" href="#story">Discover our philosophy</a>
          </div>
        </div>

        <div className="hero-stage" aria-label="Protoflow sculpture showroom">
          <div className="halo" />
          <div className="stage-number">01 / 04</div>
          <div className="sculpture sculpture-hero">
            <div className="sculpture-head" />
            <div className="sculpture-body" />
            <div className="sculpture-base" />
          </div>
          <div className="stage-plinth" />
          <div className="stage-caption">
            <span>Featured form</span>
            <strong>The Meditative One</strong>
          </div>
        </div>

        <div className="hero-note">
          <span>Scroll to explore</span>
          <i>↓</i>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow">PROTOFLOW 3D</p>
        <h2>
          Not decoration.
          <br />
          <em>A feeling in form.</em>
        </h2>
        <p>
          We bring together digital precision and the warmth of sculptural
          craft to create objects that change the character of a room.
        </p>
      </section>

      <section className="collection-section" id="collections">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 — COLLECTIONS</p>
            <h2>Find your <em>form.</em></h2>
          </div>
          <a className="text-link" href="/collections">View all collections ↗</a>
        </div>

        <div className="collection-grid">
          {collections.map((item) => (
            <a className="collection-card" href={"/collections/" + item.slug} key={item.no}>
              <span className="card-no">{item.no}</span>
              <div className={"abstract-form form-" + item.no}>
                <span />
                <span />
                <span />
              </div>
              <div className="collection-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="featured-section" id="featured">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 — THE EDIT</p>
            <h2>Pieces worth <em>keeping.</em></h2>
          </div>
          <div className="carousel-controls">
            <button aria-label="Previous products">←</button>
            <button aria-label="Next products">→</button>
          </div>
        </div>

        <div className="product-row homepage-product-row">
          {products.filter((product) => product.featured).slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>        </div>
      </section>

      <section className="experience" id="story">
        <div className="experience-visual">
          <div className="experience-orb" />
          <div className="experience-lines" />
          <span>CRAFT / FORM / LIGHT</span>
        </div>
        <div className="experience-copy">
          <p className="eyebrow">03 — THE EXPERIENCE</p>
          <h2>See it. Turn it. <em>Feel it.</em></h2>
          <p>
            Protoflow is built for a closer look. Explore every angle of a
            piece before it reaches your space—with immersive 3D viewing,
            cinematic transitions and a collection that feels like a gallery.
          </p>
          <a className="button button-outline" href="/shop">Enter the collection <span>↗</span></a>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="eyebrow">MADE FOR YOUR SPACE</p>
        <h2>Let the room<br /><em>remember it.</em></h2>
        <a className="button button-light" href="mailto:hello@protoflow3d.com">Start a conversation <span>↗</span></a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="wordmark"><span>PROTOFLOW</span><b>3D</b></span>
          <p>Sculptural objects for considered spaces.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><a href="#collections">Collections</a><a href="#featured">Shop</a><a href="#story">Our Story</a></div>
          <div><span>Help</span><a href="#contact">Contact</a><a href="#contact">Shipping</a><a href="#contact">Returns</a></div>
          <div><span>Follow</span><a href="#contact">Instagram</a><a href="#contact">Pinterest</a></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Protoflow 3D</span>
          <span>Crafted with intention.</span>
        </div>
      </footer>
    </main>
  );
}