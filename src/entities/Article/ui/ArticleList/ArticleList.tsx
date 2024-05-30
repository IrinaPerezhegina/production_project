import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
   className?: string;
   articles:Article[];
   isLoading?:boolean;
   view?:ArticleView;
}

export const ArticleList = memo((props:ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article:Article) => (
        <ArticleListItem
            article={article}
            view={view}
        />
    );
    console.log(isLoading);

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
