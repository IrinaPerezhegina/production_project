import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../../model/types/comment';
import { CommentCard } from '../../CommentCard/CommentCard/CommentCard';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={<TextDeprecated text={t('there are no comments')} />}
                    on={<Text text={t('there are no comments')} />}
                />
            )}
        </VStack>
    );
});
