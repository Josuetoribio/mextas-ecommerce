export interface CategoryTileProps {
  name: string;
  /** Product photograph, cropped into the 92px circle. */
  image?: string;
  /** Lucide icon used when there is no photograph (Nuevos, Ofertas). */
  icon?: string;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function CategoryTile(props: CategoryTileProps): JSX.Element;
