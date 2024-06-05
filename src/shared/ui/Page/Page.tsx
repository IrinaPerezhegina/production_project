import { classNames } from 'shared/lib/ClassNames/classNames';
import { ReactNode } from 'react';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children:ReactNode;
}

export const Page = (props:PageProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <section className={classNames(cls.page, {}, [className])}>
            {children}
        </section>
    );
};
