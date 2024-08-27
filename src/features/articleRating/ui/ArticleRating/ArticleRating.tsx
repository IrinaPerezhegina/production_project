import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { RatingCard } from '@/entities/Rating';

interface ArticleRatingProps {
   className?: string;
   articleId:string;
}

export const ArticleRating = memo((props:ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');

    return (
        <RatingCard
            title={t('Rate the article')}
            className={classNames('', {}, [className])}
            // eslint-disable-next-line max-len
            feedbackTitle={t('Leave your feedback about the article it will help to improve the quality')}
            hasFeedback
        />
    );
});
