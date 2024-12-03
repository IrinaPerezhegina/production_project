import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye-new.svg';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/router';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const testBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack gap="16" max>
                    <HStack gap="8" max>
                        <Avatar size={32} src={article.user.avatar} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {testBlock && (
                        <ArticleTextBlockComponent
                            block={testBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">{t('read more')}</Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }
    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
