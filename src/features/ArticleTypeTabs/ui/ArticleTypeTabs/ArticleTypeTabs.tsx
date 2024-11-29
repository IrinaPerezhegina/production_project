import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => t('all'),
                    on: () => t('All articles'),
                }),
            },
            {
                value: ArticleType.IT,
                content: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => t('IT'),
                    on: () => t('It'),
                }),
            },
            {
                value: ArticleType.ECONOMICS,
                content: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => t('economy'),
                    on: () => t('Economy'),
                }),
            },
            {
                value: ArticleType.SCIENCE,
                content: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => t('science'),
                    on: () => t('Science'),
                }),
            },
        ],
        [t],
    );

    const onTabClickType = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <TabsDeprecated
                    tabs={typeTabs}
                    onTabClick={onTabClickType}
                    value={value}
                    className={classNames('', {}, [className])}
                />
            }
            on={
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    onTabClick={onTabClickType}
                    value={value}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
});
