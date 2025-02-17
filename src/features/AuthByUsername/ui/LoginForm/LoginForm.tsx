import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const forceUpdate = useForceUpdate();
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, username, password, onSuccess, forceUpdate]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('form authorizations')} />
                        {error && (
                            <TextDeprecated
                                text={t(
                                    'You have entered an incorrect username or password',
                                )}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            autofocus
                            placeholder={t('enter username')}
                            className={cls.input}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            placeholder={t('enter password')}
                            className={cls.input}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('enter')}
                        </ButtonDeprecated>
                    </div>
                }
                on={
                    <VStack
                        gap="16"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t('form authorizations')} />
                        {error && (
                            <Text
                                text={t(
                                    'You have entered an incorrect username or password',
                                )}
                                variant="error"
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
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('enter')}
                        </Button>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
