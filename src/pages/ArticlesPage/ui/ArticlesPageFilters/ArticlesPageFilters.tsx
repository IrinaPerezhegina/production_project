import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import cls from './ArticlesPageFilters.module.scss';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const {
        onChangeOrder,
        onChangeSort,
        onChangeType,
        onChangeSearch,
        onChangeView,
        order,
        search,
        sort,
        type,
        view,
    } = useArticleFilters();

    // const fetchData = useCallback(() => {
    //     dispatch(fetchArticlesList({ replace: true }));
    // }, [dispatch]);

    // const debounceFetchData = useDebounce(fetchData, 500);

    // const onChangeOrder = useCallback(
    //     (newOrder: SortOrder) => {
    //         dispatch(articlesPageActions.setOrder(newOrder));
    //         dispatch(articlesPageActions.setPage(1));
    //         fetchData();
    //     },
    //     [dispatch, fetchData],
    // );

    // const onChangeSort = useCallback(
    //     (newSort: ArticleSortField) => {
    //         dispatch(articlesPageActions.setSort(newSort));
    //         dispatch(articlesPageActions.setPage(1));
    //         fetchData();
    //     },
    //     [dispatch, fetchData],
    // );

    // const onChangeView = useCallback(
    //     (view: ArticleView) => {
    //         dispatch(articlesPageActions.setView(view));
    //         dispatch(articlesPageActions.setPage(1));
    //         fetchData();
    //     },
    //     [dispatch, fetchData],
    // );

    // const onChangeSearch = useCallback(
    //     (search: string) => {
    //         dispatch(articlesPageActions.setSearch(search));
    //         dispatch(articlesPageActions.setPage(1));
    //         debounceFetchData();
    //     },
    //     [dispatch, debounceFetchData],
    // );

    // const onChangeType = useCallback(
    //     (value: ArticleType) => {
    //         dispatch(articlesPageActions.setType(value));
    //         dispatch(articlesPageActions.setPage(1));
    //         fetchData();
    //     },
    //     [dispatch, fetchData],
    // );

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('search')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                onChangeType={onChangeType}
                value={type}
            />
        </div>
    );
});
