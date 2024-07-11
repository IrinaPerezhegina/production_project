import {
    Menu,
} from '@headlessui/react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Fragment } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content:ReactNode;
    onClick?:()=>void;
    href?:string
 }

interface DropdownProps {
   className?: string;
   items:DropdownItem[];
   trigger:ReactNode;
}

export function Dropdown(props:DropdownProps) {
    const
        {
            className,
            trigger,
            items,
        } = props;
    return (
        <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={cls.menu}>
                {items.map((item) => (
                    <Menu.Item as={Fragment} disabled={item.disabled}>
                        {({ active }) => (
                            <button
                                type="button"
                                onClick={item.onClick}
                                // href="/settings"
                                className={classNames(
                                    cls.item,
                                    { [cls.active]: active },
                                    [className],
                                )}
                            >
                                {item.content}
                            </button>
                        )}
                    </Menu.Item>
                ))}

            </Menu.Items>
        </Menu>
    );
}
