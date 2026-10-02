export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase micro-label above the field. */
  label?: string;
  hint?: string;
  /** Error message — replaces the hint and turns the border red. */
  error?: string;
  /** Lucide icon rendered inside, left of the text (e.g. "search"). */
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  suffix?: React.ReactNode;
  wrapStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
