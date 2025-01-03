import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';
import CopyIconNew from '@/shared/assets/icons/copy-new-.svg';

interface CodeProps {
    className?: string;
    code: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, code } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
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
            }
            on={
                <pre
                    className={classNames(cls.codeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{code}</code>
                </pre>
            }
        />
    );
});
