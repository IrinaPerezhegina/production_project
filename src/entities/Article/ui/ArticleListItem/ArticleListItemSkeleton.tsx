import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const mainClasses = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => cls.articleListItem,
            on: () => cls.articleListItemRedesigned,
        });

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => SkeletonDeprecated,
            on: () => SkeletonRedesigned,
        });

        if (view === ArticleView.BIG) {
            const cardContent = (
                <>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.username}
                        />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </>
            );
            return (
                <div
                    className={classNames(mainClasses, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <CardRedesigned border="round" className={cls.card}>
                                {cardContent}
                            </CardRedesigned>
                        }
                        off={
                            <CardDeprecated className={cls.card}>
                                {cardContent}
                            </CardDeprecated>
                        }
                    />
                </div>
            );
        }
        const cardContent = (
            <>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Skeleton
                            width="100%"
                            height={150}
                            border="32px"
                            className={cls.img}
                        />
                    }
                    off={
                        <div className={cls.imageWrapper}>
                            <Skeleton
                                width={200}
                                height={200}
                                className={cls.img}
                            />
                        </div>
                    }
                />
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </>
        );
        return (
            <div
                className={classNames(mainClasses, {}, [className, cls[view]])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <CardRedesigned border="round" className={cls.card}>
                            {cardContent}
                        </CardRedesigned>
                    }
                    off={
                        <CardDeprecated className={cls.card}>
                            {cardContent}
                        </CardDeprecated>
                    }
                />
            </div>
        );
    },
);
