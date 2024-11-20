import { memo, useCallback } from 'react';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ThemeIcon from '@/shared/assets/icons/theme-new.svg';

interface AppLinkProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: AppLinkProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    console.log(theme);

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) =>
            dispatch(saveJsonSettings({ theme: newTheme })),
        );
    }, [toggleTheme, dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted
                    />
                </ButtonDeprecated>
            }
            on={
                <Icon
                    Svg={ThemeIcon}
                    width={40}
                    clickable
                    onClick={onToggleHandler}
                />
            }
        />
    );
});
