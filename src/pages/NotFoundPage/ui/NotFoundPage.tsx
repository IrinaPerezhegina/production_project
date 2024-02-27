import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
className?: string;
}

export const NotFoundPage = ({ className }:NotFoundPageProps) => {
    const { t } = useTranslation('translation');
    return (

        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
