/**
 * MEXTAS action button — square corners, uppercase label, wide tracking.
 * @startingPoint section="Core" subtitle="Black-first commerce buttons" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = solid black (main CTA) · secondary = black outline · quiet = grey fill · ghost = bare · sale = red (discount CTAs only) · inverse = white on dark. */
  variant?: 'primary' | 'secondary' | 'quiet' | 'ghost' | 'sale' | 'inverse';
  /** sm 36px · md 44px (default) · lg 54px (hero / PDP CTAs). */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  iconLeft?: string;
  /** Lucide icon name rendered after the label (e.g. "arrow-right"). */
  iconRight?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  /** Render as another tag, e.g. "a". */
  as?: 'button' | 'a';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
