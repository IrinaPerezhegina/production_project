import { FC, memo } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { ArticleDetails } from 'entities/Article';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    // const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails />
        </div>
    );
};

export default memo(ArticleDetailsPage);
