export interface SectionHeadingProps {
  /** Uppercased section title, e.g. "Productos destacados". */
  title: string;
  /** Optional right-aligned link label, e.g. "Ver todos". */
  action?: string;
  actionHref?: string;
  onAction?: (e: React.MouseEvent) => void;
  align?: 'between' | 'center';
  eyebrow?: string;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
