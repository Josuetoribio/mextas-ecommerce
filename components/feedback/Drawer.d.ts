export interface DrawerProps {
  open: boolean;
  /** Uppercase header title, e.g. "Tu carrito". */
  title: string;
  side?: 'right' | 'left';
  width?: number;
  onClose?: () => void;
  /** Sticky bottom area — totals and the checkout CTA. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Drawer(props: DrawerProps): JSX.Element;
