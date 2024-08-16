import { classNames } from '@/shared/lib/ClassNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
   className?: string;
   Svg:React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
   inverted?:boolean;
}

export const Icon = memo((props:IconProps) => {
    const { className, Svg, inverted } = props;

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    );
});
