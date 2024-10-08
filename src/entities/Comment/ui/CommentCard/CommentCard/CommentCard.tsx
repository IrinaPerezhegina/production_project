import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
   className?: string;
   comment?:Comment;
   isLoading?:boolean;
}

export const CommentCard = memo((props:CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                align="start"
                className={classNames(cls.commentCard, {}, [className, cls.loading])}
            >
                <div
                    className={cls.header}
                >
                    <Skeleton
                        border="50%"
                        width={30}
                        height={30}
                    />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </VStack>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            align="start"
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                ) : null}
                <Text
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </VStack>
    );
});
