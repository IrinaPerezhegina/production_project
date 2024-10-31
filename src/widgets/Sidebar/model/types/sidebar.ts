export default interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    authOnly?: boolean;

    // eslint-disable-next-line semi
}
