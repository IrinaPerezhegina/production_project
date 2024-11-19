import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGAttributes<SVGAElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, width = 32, height = 32, Svg, ...otherProps } = props;

    return (
        <Svg
            width={width}
            height={height}
            className={classNames(cls.icon, {}, [className])}
            {...otherProps}
        />
    );
});
