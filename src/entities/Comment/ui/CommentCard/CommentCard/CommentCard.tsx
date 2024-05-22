import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
   className?: string;
}

export const CommentCard = memo((props:CommentCardProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            {t('commentlist')}
        </div>
    );
});
