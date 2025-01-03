import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;

    const { t } = useTranslation('article');
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('ascending'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ],

        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('date of creation'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('name'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('views'),
            },
        ],

        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    data-testid="ArticleSortSelector"
                    className={classNames(cls.articleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select
                        data-testid="ArticleSortSelector.Content"
                        options={sortFieldOptions}
                        label={t('sort by')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select
                        data-testid="ArticleSortSelector.Desc"
                        className={cls.order}
                        options={orderOptions}
                        label={t('by')}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </div>
            }
            on={
                <div
                    data-testid="ArticleSortSelector"
                    className={classNames(
                        cls.articleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="8">
                        <Text text={t('sort By')} />
                        <ListBox
                            data-testid="ArticleSortSelector.Content"
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            data-testid="ArticleSortSelector.Desc"
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            }
        />
    );
});
