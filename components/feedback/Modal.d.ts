export interface ModalProps {
  open: boolean;
  /** Accessible label; the visible title lives in the children. */
  title: string;
  width?: number;
  onClose?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Modal(props: ModalProps): JSX.Element;
