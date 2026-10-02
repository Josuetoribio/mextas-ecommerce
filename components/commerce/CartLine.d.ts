export interface CartItem { id: string; name: string; image?: string; variant?: string; price: number; qty: number; stock?: number }
export interface CartLineProps {
  item: CartItem;
  onQty?: (qty: number) => void;
  onRemove?: () => void;
  /** Order summaries and confirmation screens — hides stepper and remove. */
  readOnly?: boolean;
  style?: React.CSSProperties;
}
export declare function CartLine(props: CartLineProps): JSX.Element;
