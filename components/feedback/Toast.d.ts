export interface ToastProps {
  open: boolean;
  /** Uppercase confirmation, e.g. "Producto agregado al carrito". */
  title: string;
  /** Optional mini-cart preview of the product just added. */
  product?: { name: string; price: number; image?: string };
  /** Buttons row — typically "Ver carrito" + "Finalizar compra". */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** Auto-dismiss ms; 0 disables. */
  duration?: number;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
