import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType{
    path:string,
    text:string,
    Icon:React.FunctionComponent<React.SVGAttributes<SVGAElement>>
    authOnly?:boolean
}

export const SidebarItemsList:SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'about',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'article',
        authOnly: true,
    },
];
