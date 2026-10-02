export interface AnnouncementLink { label: string; href?: string; caret?: boolean; onClick?: (e: React.MouseEvent) => void }
export interface AnnouncementBarProps {
  /** Rotating uppercase messages, e.g. ["Envío gratis en compras mayores a $1,499 MXN"]. */
  messages: string[];
  /** Right-hand utility links: México (MXN $), Ayuda, Rastreo de pedido. */
  links?: AnnouncementLink[];
  /** Rotation interval in ms. */
  interval?: number;
  style?: React.CSSProperties;
}
export declare function AnnouncementBar(props: AnnouncementBarProps): JSX.Element;
