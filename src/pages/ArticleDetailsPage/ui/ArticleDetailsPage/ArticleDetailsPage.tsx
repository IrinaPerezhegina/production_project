import { FC, memo } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props:ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                { t('the article was not found')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id || '1'} />
            <Text
                title={t('comments')}
                className={cls.commentTitle}
            />
            <CommentList
                isLoading
                comments={[]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
