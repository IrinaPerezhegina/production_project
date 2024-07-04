import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import cls from './HStack.module.scss';

interface HStackProps {
   className?: string;
}

export const HStack = memo((props:HStackProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.hStack, {}, [className])} />
    );
});
