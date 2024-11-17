import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation('translation');

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('unexpected error')}</p>
            <Button onClick={reloadPage}>{t('refresh the page')}</Button>
        </div>
    );
};
