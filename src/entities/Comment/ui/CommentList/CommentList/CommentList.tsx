import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import cls from './CommentList.module.scss';
// import { Comment } from '../../../model/types/comment';

interface CommentListProps {
   className?: string;
   // comments?:Comment[];
   // isLoading?:boolean
}

export const CommentList = memo((props:CommentListProps) => {
    const {
        className,
        //   comments,
        //   isLoading,
    } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {t('commentlist')}
        </div>
    );
});
