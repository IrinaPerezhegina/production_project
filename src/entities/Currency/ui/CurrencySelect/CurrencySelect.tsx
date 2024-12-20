import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, readonly, onChange, value }: CurrencySelectProps) => {
        const { t } = useTranslation('profile');
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ListBoxDeprecated
                        className={classNames('', {}, [className])}
                        label={t('specify the currency')}
                        items={options}
                        value={value}
                        defaultValue={t('specify the currency')}
                        onChange={onChangeHandler}
                        readonly={readonly}
                        direction="top right"
                    />
                }
                on={
                    <ListBox
                        className={classNames('', {}, [className])}
                        label={t('currency')}
                        items={options}
                        value={value}
                        defaultValue={t('currency')}
                        onChange={onChangeHandler}
                        readonly={readonly}
                        direction="top right"
                    />
                }
            />
        );
    },
);
