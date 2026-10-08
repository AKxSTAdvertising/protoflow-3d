# PROTOFLOW 3D

Premium 3D sculpture, devotional art and décor e-commerce experience.

## Stack
- Next.js + React
- React Three Fiber / Three.js
- GSAP
- GitHub + Vercel
- Sanity is optional and currently not required

## Catalog
The launch catalog is intentionally maintained in `lib/store.ts`.

To bulk-manage products later:
1. Add or remove objects from the `products` array.
2. Change price, sizes, collection, finish, or flags in the same object.
3. Product, shop, collection, related-product and homepage sections consume this central catalog automatically.
4. Add real product images through the `images` array.
5. Add a GLB/GLTF path through the `model` field.

Current launch catalog: 15 products across 4 collections, with demo pricing around ₹1,500.

## Development
```bash
npm install
npm run dev
```

## Launch flow
Product → Add to Bag → Cart → Checkout → Order Confirmation.

## Signature interaction
Clicking a piece triggers the cinematic showroom reveal before opening product detail.
