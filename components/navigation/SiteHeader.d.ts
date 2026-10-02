export interface NavItem { key: string; label: string; href?: string; /** red label, used for "Ofertas" */ highlight?: boolean }
/**
 * Sticky storefront header: wordmark, search trigger, account/wishlist/cart, category nav row.
 * @startingPoint section="Navigation" subtitle="Sticky storefront header + nav" viewport="1280x160"
 */
export interface SiteHeaderProps {
  nav?: NavItem[];
  activeNav?: string;
  cartCount?: number;
  wishlistCount?: number;
  onSearch?: () => void;
  onCart?: () => void;
  onWishlist?: () => void;
  onAccount?: () => void;
  onNav?: (key: string) => void;
  onMenu?: () => void;
  /** Viewport width below which the header collapses to ☰ · MEXTAS · buscar · carrito. */
  compactAt?: number;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
