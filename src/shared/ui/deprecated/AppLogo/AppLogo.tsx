import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/avatar_new.svg';

interface AppLogoProps {
    className?: string;
}

/**
 *  Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} width={100} height={100} />
        </HStack>
    );
});
