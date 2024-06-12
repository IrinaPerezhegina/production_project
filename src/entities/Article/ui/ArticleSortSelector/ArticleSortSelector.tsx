import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string;
}

export const ArticleSortSelector = memo((props:ArticleSortSelectorProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            {/*  */}
        </div>
    );
});
