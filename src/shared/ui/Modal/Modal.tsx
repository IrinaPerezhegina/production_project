import { classNames } from 'shared/lib/ClassNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
className?: string;
children?:ReactNode;
isOpen?:boolean;
onClose?:()=>void;
}
const ANIMATION_DELAY = 300;
export const Modal = (props:ModalProps) => {
    const {
        isOpen,
        onClose,
        className,
        children,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef < ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeydown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => () => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        }
        clearTimeout(timerRef.current);
        window.removeEventListener('keydown', onKeydown);
    }, [isOpen, onKeydown]);

    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
