# MEXTAS Storefront — UI kit

Interactive recreation of the MEXTAS ecommerce front-end, built entirely from this design
system's components. No backend: mock catalogue + local state, cart and wishlist persisted
in `localStorage` under `mextas.store.v1`.

Open `index.html`.

## Screens / routes
| Route key | Screen | File |
|---|---|---|
| `home` | Homepage: hero carousel, categories, destacados, promos, packs, colecciones, más vendidos, beneficios, newsletter, blog | `Home.jsx` |
| `productos` | Catalogue: filters, sorting, chips, skeletons, load-more | `Catalog.jsx` |
| `ofertas` / `packs` / `colecciones` / `coleccion` | Commercial pages: countdown, bundles, editorial collection headers | `Catalog.jsx` |
| `producto` | PDP: gallery with hover zoom, variants, quantity, stock, accordions, related | `ProductPage.jsx` |
| `carrito` / `checkout` | Cart page, 3-step checkout, order confirmation `MX-2026-10482` | `Checkout.jsx` |
| `cuenta` / `pedidos` / `favoritos` / `rastreo` | Account, order history with timeline, wishlist, tracking lookup | `Account.jsx` |
| `blog` / `articulo` / `sobre` / `envios` / `devoluciones` | Editorial and info pages | `Content.jsx` |

Overlays (cart drawer, search overlay, quick view, mini-cart toast, mobile menu) live in
`Overlays.jsx` and are mounted once by `App.jsx`.

## State
`Store.jsx` exposes a single `useStore()` context: `cart`, `wishlist`, `promo`, `totals`,
`route`, `ui` and the actions `add / setQty / remove / clearCart / toggleWish / applyPromo /
go / open*`. Promo code `MEXTAS10` = 10% off. Free shipping above $1,499 MXN.

## Data
`data.jsx` holds 38 products with the full product contract (slug, category, price,
compareAtPrice, discount, rating, reviews, images, colors, stock, tags, flags,
description, features, specifications) plus categories, nav, hero slides, packs,
collections, blog posts, orders and footer columns.

## Known simplifications
- Product photography reuses the 8 supplied studio images across the catalogue; every
  product's gallery therefore shows the same shot set. Replace `data.jsx → IMG` with real
  per-product assets.
- Hombres / Mujeres nav entries fall back to the full catalogue (no gendered data supplied).
