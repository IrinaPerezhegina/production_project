import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Text } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
   className?: string;
   id?:string;
}

export const ArticleDetailsComments = memo((props:ArticleDetailsCommentsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('article');

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack
            max
            gap="16"
            align="start"
            className={classNames('', {}, [className])}
        >
            <Text
                title={t('comments')}
            />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />

        </VStack>
    );
});
