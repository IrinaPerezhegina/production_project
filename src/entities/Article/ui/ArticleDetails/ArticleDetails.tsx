import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { renderArticleBlock } from './renderBlock';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <Avatar size={200} src={article?.img} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max align="start" data-testid="ArticleDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8" align="start" className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />

                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};
const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                className={cls.img}
                src={article?.img}
                fallback={
                    <SkeletonRedesigned
                        width="100%"
                        height={420}
                        border="16px"
                    />
                }
            />

            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesigned,
    });
    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <TextDeprecated
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                text={t('an error occurred while uploading the article')}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<Deprecated />}
                on={<Redesigned />}
            />
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.articleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
