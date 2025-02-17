import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    content: ReactElement;
    left?: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;

    return (
        <div className={classNames(cls.stickyContentLayout, {}, [className])}>
            {right && <div className={cls.right}>{right}</div>}
            <div className={cls.content}>{content}</div>
            {left && <div className={cls.left}>{left}</div>}
        </div>
    );
};
