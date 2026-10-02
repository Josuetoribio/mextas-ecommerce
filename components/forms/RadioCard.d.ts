export interface RadioCardProps {
  title: string;
  /** Supporting line, e.g. "Entrega estimada 2–4 días". */
  description?: string;
  /** Right-aligned value, usually a price or "Gratis". */
  meta?: React.ReactNode;
  /** Lucide icon name (payment / shipping method glyph). */
  icon?: string;
  selected?: boolean;
  onSelect?: () => void;
  style?: React.CSSProperties;
}
export declare function RadioCard(props: RadioCardProps): JSX.Element;
