export interface QuantityStepperProps {
  value?: number;
  min?: number;
  /** Clamp to available stock. */
  max?: number;
  onChange?: (value: number) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function QuantityStepper(props: QuantityStepperProps): JSX.Element;
