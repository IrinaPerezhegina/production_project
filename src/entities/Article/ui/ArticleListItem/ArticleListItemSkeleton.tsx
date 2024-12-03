import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';

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
        const Card = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => CardDeprecated,
            on: () => CardRedesigned,
        });

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(mainClasses, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card>
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
                        <Skeleton
                            height={24}
                            width={250}
                            className={cls.title}
                        />
                        <Skeleton height={200} className={cls.img} />
                        <div className={cls.footer}>
                            <Skeleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <div
                className={classNames(mainClasses, {}, [className, cls[view]])}
            >
                <CardDeprecated className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </CardDeprecated>
            </div>
        );
    },
);
