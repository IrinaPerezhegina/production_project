import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Icon } from '../Icon/Icon';

interface CodeProps {
   className?: string;
   code:string;
}

export const Code = memo((props:CodeProps) => {
    const { className, code } = props;

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {code}
            </code>
        </pre>
    );
});
