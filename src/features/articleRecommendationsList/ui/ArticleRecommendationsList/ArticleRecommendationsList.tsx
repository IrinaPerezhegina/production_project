import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');

    const {
        isLoading,
        data: articles,
        error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack
            align="start"
            gap="8"
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('we recommend it')}
            />
            <ArticleList
                isLoading={isLoading}
                target="_blank"
                articles={articles}
            />
        </VStack>
    );
});
