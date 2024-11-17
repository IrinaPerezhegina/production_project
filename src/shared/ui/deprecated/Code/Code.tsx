import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    code: string;
}

/**
 *  Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
    const { className, code } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);
    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{code}</code>
        </pre>
    );
});
