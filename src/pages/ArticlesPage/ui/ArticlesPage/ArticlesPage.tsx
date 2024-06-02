/* eslint-disable max-len */
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
