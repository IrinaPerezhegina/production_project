import { memo, useCallback } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/Icon';

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
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
});
