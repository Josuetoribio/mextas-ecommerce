export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Required accessible label (Spanish, sentence case) — e.g. "Abrir carrito". */
  label: string;
  /** Square hit area in px. Never below 40 on touch surfaces. */
  size?: number;
  variant?: 'ghost' | 'outline' | 'solid';
  /** Toggled state — turns the glyph red (wishlist). */
  active?: boolean;
  /** Numeric counter bubble (cart / wishlist counts). */
  badge?: number;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
