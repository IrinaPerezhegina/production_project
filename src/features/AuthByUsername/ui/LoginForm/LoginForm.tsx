import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('enter username')}
                className={cls.input}
            />
            <Input
                placeholder={t('enter password')}
                className={cls.input}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('enter')}
            </Button>
        </div>

    );
};
