export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Strings, or { value, label } pairs. */
  options: Array<string | { value: string; label: string }>;
  size?: 'sm' | 'md' | 'lg';
  wrapStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
