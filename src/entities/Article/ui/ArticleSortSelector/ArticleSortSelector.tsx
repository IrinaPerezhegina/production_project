import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string;
  sort:ArticleSortField;
  order:SortOrder;
  onChangeOrder:(newOrder:SortOrder)=>void;
  onChangeSort:(newOrder:ArticleSortField)=>void;

}

export const ArticleSortSelector = memo((props:ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;

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
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
