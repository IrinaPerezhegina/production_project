import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

interface StarRatingProps {
    className?: string;
    onSelected?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 *  Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelected, size = 30, selectedStars = 0 } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelected?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => cls.starRating,
                    on: () => cls.starRatingRedesigned,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStarCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    Svg: StarIcon,
                    key: starNumber,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarCount >= starNumber,
                };

                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={<IconDeprecated {...commonProps} />}
                        on={<Icon clickable={!isSelected} {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
