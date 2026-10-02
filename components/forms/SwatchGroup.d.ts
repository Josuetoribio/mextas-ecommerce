export interface SwatchGroupProps {
  /** Uppercase label; the selected value is printed next to it. */
  label?: string;
  /** For type="color": { name, hex }[]. For type="text": string[] (sizes, capacities). */
  options: Array<string | { name: string; hex: string }>;
  value?: string;
  onChange?: (name: string) => void;
  type?: 'color' | 'text';
  style?: React.CSSProperties;
}
export declare function SwatchGroup(props: SwatchGroupProps): JSX.Element;
