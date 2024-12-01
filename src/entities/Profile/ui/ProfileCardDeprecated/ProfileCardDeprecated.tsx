import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { classNames, Mods } from '@/shared/lib/ClassNames/classNames';

import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';

import { CountrySelect } from '@/entities/Country';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ProfileCardDeprecated.module.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <Text
                theme={TextTheme.ERROR}
                title={t('an error occurred while uploading the profile')}
                text={t('try refreshing the page')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoader = () => (
    <HStack
        justify="center"
        className={classNames(cls.ProfileCard, {}, [cls.loading])}
    >
        <Loader />
    </HStack>
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <VStack
            max
            align="start"
            gap="16"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <AvatarDeprecated src={data?.avatar} alt="" />
                </HStack>
            )}
            <InputDeprecated
                className={cls.input}
                value={data?.first}
                placeholder={t('your name')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                className={cls.input}
                value={data?.lastname}
                placeholder={t('your last name')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                className={cls.input}
                value={data?.age}
                placeholder={t('your age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.city}
                placeholder={t('city')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.username}
                placeholder={t('enter username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.avatar}
                placeholder={t('enter the link to the avatar')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
