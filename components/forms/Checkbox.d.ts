export interface CheckboxProps {
  label: React.ReactNode;
  /** Right-aligned result count, used in catalogue filters. */
  count?: number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
