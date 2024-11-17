import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 *  Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;
    return (
        <div
            onClick={onClick}
            className={classNames(cls.overlay, {}, [className])}
        />
    );
});
