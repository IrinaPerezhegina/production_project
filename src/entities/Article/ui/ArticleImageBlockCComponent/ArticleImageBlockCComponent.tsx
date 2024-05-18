import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './ArticleImageBlockCComponent.module.scss';

interface ArticleImageBlockCComponentProps {
   className?: string;
}

export const ArticleImageBlockCComponent: FC<ArticleImageBlockCComponentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlockCComponent, {}, [className])}>
            {t('ArticleImageBlockCComponent')}
        </div>
    );
};
