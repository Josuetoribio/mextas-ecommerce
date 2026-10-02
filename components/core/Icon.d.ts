export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "shopping-bag", "heart", "search"). */
  name: string;
  /** Pixel box. Default 20. */
  size?: number;
  /** Stroke weight. MEXTAS uses 1.6 for UI, 1.2 for large decorative glyphs. */
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
