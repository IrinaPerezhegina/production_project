import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('form authorizations')} />
            {error && (
                <Text
                    text={t('You have entered an incorrect username or password')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                autofocus
                placeholder={t('enter username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('enter password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('enter')}
            </Button>
        </div>

    );
});
