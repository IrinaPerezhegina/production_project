import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string;
}

export const ArticleSortSelector = memo((props:ArticleSortSelectorProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const orderOptions = useMemo<SelectOption[]>(
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

    const sortFieldOptions = useMemo<SelectOption[]>(
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
            />
            <Select
                options={orderOptions}
                label={t('by')}
            />
        </div>
    );
});
