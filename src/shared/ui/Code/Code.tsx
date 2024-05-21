import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
   className?: string;
   code:string;
}

export const Code = memo((props:CodeProps) => {
    const { className, code } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);
    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {code}
            </code>
        </pre>
    );
});
