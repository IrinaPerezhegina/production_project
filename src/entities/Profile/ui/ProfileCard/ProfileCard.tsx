import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
className?: string;
data?:Profile;
isLoading?:boolean;
error?:string;
readonly?:boolean;
onChangeFirstname:(value?:string)=>void,
onChangeLastname:(value?:string)=>void,
onChangeAge:(value?:string)=>void,
onChangeCity:(value?:string)=>void,
}

export const ProfileCard = (props:ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('an error occurred while uploading the profile')}
                    text={t('try refreshing the page')}
                    align={TextAlign.CENTER}
                />
            </div>

        );
    }
    return (

        <div className={classNames(cls.ProfileCard, {}, [className])}>

            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('your name')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('your last name')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('your age')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('city')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>
        </div>

    );
};
