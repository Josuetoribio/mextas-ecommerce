export interface OrderTimelineProps {
  /** Defaults to Pedido recibido → Preparando → Enviado → En camino → Entregado. */
  steps?: string[];
  /** Index of the current step (inclusive — all previous render as complete). */
  current?: number;
  style?: React.CSSProperties;
}
export declare function OrderTimeline(props: OrderTimelineProps): JSX.Element;
