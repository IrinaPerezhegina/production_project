import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/ClassNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../OverLay/Overlay';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
const ANIMATION_DELAY = 300;

/**
 *  Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Modal = (props: ModalProps) => {
    const { isOpen, onClose, className, children, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        onClose,
        animationDelay: ANIMATION_DELAY,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
