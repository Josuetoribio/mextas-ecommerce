export interface PackCardProps {
  /** Pack name, e.g. "Pack Work". */
  name: string;
  description?: string;
  /** Included products, one line each. */
  items?: string[];
  price: number;
  /** Sum of the individual prices — drives the "Ahorras $X" line. */
  compareAt?: number;
  image?: string;
  onAdd?: () => void;
  style?: React.CSSProperties;
}
export declare function PackCard(props: PackCardProps): JSX.Element;
