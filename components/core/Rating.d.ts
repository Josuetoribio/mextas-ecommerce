export interface RatingProps {
  /** 0–5, one decimal. Rendered as a clipped star row (no half-star glyphs). */
  value?: number;
  /** Review count shown in parentheses. */
  reviews?: number;
  /** Star font-size in px. 13 on cards, 15 on PDP. */
  size?: number;
  showValue?: boolean;
  style?: React.CSSProperties;
}
export declare function Rating(props: RatingProps): JSX.Element;
