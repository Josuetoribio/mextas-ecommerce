export interface PriceProps {
  /** Current price, plain number in MXN. */
  value: number;
  /** Was-price. When set, renders struck-through plus the -% delta in red. */
  compareAt?: number;
  size?: 'sm' | 'md' | 'lg';
  currency?: string;
  style?: React.CSSProperties;
}
export declare function Price(props: PriceProps): JSX.Element;
