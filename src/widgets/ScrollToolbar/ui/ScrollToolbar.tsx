import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    return (
        <VStack
            align="center"
            justify="center"
            className={classNames(cls.scrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
