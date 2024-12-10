import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;

        const { t } = useTranslation('article');

        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                align="start"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('we recommend it')}
                        />
                    }
                    on={<Text size="l" title={t('we recommend it')} />}
                />

                <ArticleList
                    isLoading={isLoading}
                    target="_blank"
                    articles={articles}
                />
            </VStack>
        );
    },
);
