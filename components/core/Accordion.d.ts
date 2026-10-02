export interface AccordionItem { title: string; content: React.ReactNode }
export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount, or null for all closed. */
  defaultOpen?: number | null;
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
