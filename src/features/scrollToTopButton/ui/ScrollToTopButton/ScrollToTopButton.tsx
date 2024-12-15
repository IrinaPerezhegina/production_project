import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;
    const onclick = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };
    return (
        <Icon
            Svg={CircleIcon}
            onClick={onclick}
            width={32}
            height={32}
            clickable
            className={classNames(cls.scrollToTopButton, {}, [className])}
        />
    );
});
