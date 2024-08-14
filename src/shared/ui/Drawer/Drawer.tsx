import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../OverLay/Overlay';

interface DrawerProps {
   className?: string;
   children:ReactNode;
   isOpen?:boolean;
   onClose:()=>void;
   lazy?:boolean;
}
const height = window.innerHeight - 100;

export const Drawer = memo((props:DrawerProps) => {
    const [{ y }, api] = useSpring(() => ({ y: height }));
    const {
        className,
        children,
        isOpen,
        onClose,
        // lazy,
    } = props;
    const { theme } = useTheme();

    // const {
    //     close,
    //     isClosing,
    //     isMounted,
    // } = useModal({ onClose, animationDelay: 300, isOpen });

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    // const mods:Mods = {
    //     [cls.opened]: isOpen,
    //     [cls.isClosing]: isClosing,
    // };

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    // if (lazy && !isMounted) {
    //     return null;
    // }
    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh-${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>
    );
});
