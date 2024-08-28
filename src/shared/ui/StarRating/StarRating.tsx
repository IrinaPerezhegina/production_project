import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
   className?: string;
   onSelected?:(starsCount:number)=>void;
   size?:number;
   selectedStars?:number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props:StarRatingProps) => {
    const {
        className,
        onSelected,
        size = 30,
        selectedStars = 0,
    } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount:number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount:number) => () => {
        if (!isSelected) {
            onSelected?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
