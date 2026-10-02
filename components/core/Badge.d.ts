export interface BadgeProps {
  children?: React.ReactNode;
  /** new = black · sale = red (discount only) · bestseller = outlined · neutral / success / warning = status. */
  tone?: 'new' | 'sale' | 'bestseller' | 'neutral' | 'success' | 'warning';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
