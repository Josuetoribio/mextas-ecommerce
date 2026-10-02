export interface FooterLink { label: string; href?: string; key?: string }
export interface FooterColumn { title: string; links: FooterLink[] }
/**
 * Full storefront footer: brand block, link columns, newsletter, payment marks.
 * @startingPoint section="Navigation" subtitle="Full storefront footer" viewport="1280x520"
 */
export interface SiteFooterProps {
  /** Comprar / Información / Mi cuenta columns. */
  columns: FooterColumn[];
  /** Lucide brand glyph names. */
  socials?: string[];
  onNavigate?: (link: FooterLink) => void;
  onSubscribe?: (email: string) => void;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
