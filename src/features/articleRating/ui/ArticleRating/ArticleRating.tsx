import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
   className?: string;
   articleId:string;
}

const ArticleRating = memo((props:ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount:number, feedback?:string) => {
        try {
            rateArticleMutation({
                articleId,
                userId: userData?.id ?? '',
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            // error handle
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    const onAccept = useCallback((starsCount:number, feedback?:string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <Skeleton
                width="100%"
                height="120px"
            />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            title={t('Rate the article')}
            className={classNames('', {}, [className])}
            // eslint-disable-next-line max-len
            feedbackTitle={t('Leave your feedback about the article it will help to improve the quality')}
            hasFeedback
        />
    );
});

export default ArticleRating;
