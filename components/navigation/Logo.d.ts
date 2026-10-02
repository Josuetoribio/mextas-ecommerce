export interface LogoProps {
  /** Cap height in px. 34 desktop header, 24 mobile, 30 footer. */
  size?: number;
  color?: string;
  as?: 'div' | 'a' | 'span' | 'h1';
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
