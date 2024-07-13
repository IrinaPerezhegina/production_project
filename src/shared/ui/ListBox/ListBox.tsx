import {
    Listbox as HListBox,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { HStack } from '../Stack';

export interface ListBoxItem{
value:string;
content:ReactNode;
disabled?:boolean;
}

interface ListBoxProps{
items?:ListBoxItem[];
className?:string;
value?:string;
defaultValue?:string;
onChange:(value:string)=>void;
readonly?:boolean;
direction?:DropdownDirection;
label?:string;
}

const mapDirectionClass:Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'top left': cls.optionsTopLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
};

export function ListBox(props:ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <Text text={`${label}>`} />}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.listBox, {}, [className])}
                value={value}
                onChange={onChange}

            >
                <HListBox.Button
                    className={cls.trigger}
                    disabled={readonly}

                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && ' ✔ '}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
