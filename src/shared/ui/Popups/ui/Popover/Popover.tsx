import { classNames } from '@/shared/lib/ClassNames/classNames';
import {
    Popover as HPopover,
} from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { ReactNode } from 'react';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
   className?: string;
   direction?:DropdownDirection;
   trigger:ReactNode;
   children:ReactNode;
}

export function Popover(props:PopoverProps) {
    const {
        className,
        direction = 'bottom right',
        trigger,
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                { trigger }
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
