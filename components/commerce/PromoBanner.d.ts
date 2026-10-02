export interface PromoBannerProps {
  /** Uppercase two-line headline, e.g. "Ofertas de temporada". */
  title: string;
  eyebrow?: string;
  /** Small uppercase line above the highlight, e.g. "Hasta" or "Tecnología + estilo". */
  kicker?: string;
  /** Display-size figure: "30% OFF", "desde $1,699 MXN". */
  highlight?: React.ReactNode;
  cta?: string;
  image?: string;
  /** dark = black scrim over photo (offers) · light = pale grey (packs). */
  theme?: 'dark' | 'light';
  onClick?: () => void;
  height?: number;
  style?: React.CSSProperties;
}
export declare function PromoBanner(props: PromoBannerProps): JSX.Element;
