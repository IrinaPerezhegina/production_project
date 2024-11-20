import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../../deprecated/Stack';
import AppSvg from '@/shared/assets/icons/avatar_new.svg';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg
                color="black"
                className={cls.appLogo}
                width={size}
                height={size}
            />
        </HStack>
    );
});
