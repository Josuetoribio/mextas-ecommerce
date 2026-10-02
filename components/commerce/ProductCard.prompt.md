One-line: the product grid tile used everywhere a list of products appears.

```jsx
<ProductCard product={p} onAdd={add} onQuickView={open} onToggleWishlist={fav} wishlisted={isFav} />
```
Hover does three things at once: 1.045 image zoom, wishlist fades in, "VISTA RÁPIDA" slides up. Grid: 5 cols ≥1440, 4 ≥1200, 3 ≥900, 2 on mobile, gap var(--grid-gap).
