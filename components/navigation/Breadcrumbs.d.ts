export interface Crumb { label: string; href?: string; key?: string }
export interface BreadcrumbsProps {
  items: Crumb[];
  onNavigate?: (crumb: Crumb) => void;
  style?: React.CSSProperties;
}
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
