import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
   className?: string;
   value:ArticleType;
   onChangeType:(type:ArticleType)=>void
}

export const ArticleTypeTabs = memo((props:ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('all'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('economy'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('science'),
        },
    ], [t]);

    const onTabClickType = useCallback((tab:TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            onTabClick={onTabClickType}
            value={value}
            className={classNames('', {}, [className])}
        />

    );
});
