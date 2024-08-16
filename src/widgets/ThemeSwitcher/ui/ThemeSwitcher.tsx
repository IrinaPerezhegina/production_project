import { memo } from 'react';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface AppLinkProps {
className?: string;
}

export const ThemeSwitcher = memo(({ className }:AppLinkProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
