export interface BenefitItemProps {
  /** Lucide glyph at stroke 1.2 — "truck", "rotate-ccw", "shield-check", "headset". */
  icon: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}
export declare function BenefitItem(props: BenefitItemProps): JSX.Element;
