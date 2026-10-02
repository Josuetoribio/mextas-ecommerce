export interface CountdownTimerProps {
  /** ISO date string the promo ends at. */
  to: string;
  label?: string;
  /** dark = on black promo surfaces · light = on paper. */
  theme?: 'dark' | 'light';
  style?: React.CSSProperties;
}
export declare function CountdownTimer(props: CountdownTimerProps): JSX.Element;
