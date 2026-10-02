export interface Product {
  id: string; slug: string; name: string; category: string; price: number;
  compareAtPrice?: number; rating?: number; reviews?: number; image: string;
  stock?: number; isNew?: boolean; isBestSeller?: boolean;
}
/**
 * The MEXTAS catalogue tile: square media, badges, price, rating, add-to-cart.
 * @startingPoint section="Commerce" subtitle="Product grid tile with hover actions" viewport="700x430"
 */
export interface ProductCardProps {
  product: Product;
  /** Renders the full-width black "Agregar al carrito" button. */
  onAdd?: (p: Product) => void;
  /** Renders the "Vista rápida" bar that slides up over the image on hover. */
  onQuickView?: (p: Product) => void;
  onToggleWishlist?: (p: Product) => void;
  wishlisted?: boolean;
  /** Navigate to the PDP (image and title click). */
  onOpen?: () => void;
  /** Tighter padding for 5-up desktop grids and carousels. */
  compact?: boolean;
  style?: React.CSSProperties;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
