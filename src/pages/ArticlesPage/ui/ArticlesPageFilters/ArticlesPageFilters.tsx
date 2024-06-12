import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleViewSelector } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Select } from 'shared/ui/Select/Select';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import cls from './ArticlesPageFilters.module.scss';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageFiltersProps {
   className?: string;
}

export const ArticlesPageFilters = memo((props:ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const view = useSelector(getArticlesPageView);
    const onChangeView = useCallback(() => {

    }, []);

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <Select label={t('sort by')} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('search')} />
            </Card>
        </div>
    );
});
