import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface LangSwitcherProps {
className?: string;
short?:boolean;
}

export const LangSwitcher = memo(({ className, short }:LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation');

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {short ? t('short') : t('lang')}
        </Button>

    );
});
