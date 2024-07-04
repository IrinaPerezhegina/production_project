import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import cls from './VStack.module.scss';

interface VStackProps {
   className?: string;
}

export const VStack = memo((props:VStackProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.vStack, {}, [className])}>
            /
        </div>
    );
});
