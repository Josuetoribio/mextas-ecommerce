export interface EmptyStateProps {
  /** Lucide glyph at stroke 1.1, grey. */
  icon?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
