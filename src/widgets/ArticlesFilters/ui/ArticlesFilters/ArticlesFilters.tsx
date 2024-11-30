import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticlesFilters.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
    className?: string;
    type: ArticleType;
    sort: ArticleSortField;
    order: SortOrder;
    search: string;
    onChangeSearch: (newSearch: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        type,
        sort,
        order,
        search,
        onChangeSearch,
        onChangeOrder,
        onChangeSort,
        onChangeType,
    } = props;
    const { t } = useTranslation('article');

    return (
        <Card
            className={classNames(cls.articlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    addonLeft={<Icon Svg={SearchIcon} />}
                    placeholder={t('search')}
                    onChange={onChangeSearch}
                    value={search}
                />
                <ArticleTypeTabs onChangeType={onChangeType} value={type} />

                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
