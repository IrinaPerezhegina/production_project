import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, readonly, onChange, value }: CountrySelectProps) => {
        const { t } = useTranslation('profile');
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ListBoxDeprecated
                        className={classNames('', {}, [className])}
                        label={t('specify the country')}
                        items={options}
                        value={value}
                        defaultValue={t('specify the country')}
                        onChange={onChangeHandler}
                        readonly={readonly}
                        direction="top right"
                    />
                }
                on={
                    <ListBox
                        className={classNames('', {}, [className])}
                        label={t('country')}
                        items={options}
                        value={value}
                        defaultValue={t('country')}
                        onChange={onChangeHandler}
                        readonly={readonly}
                        direction="top right"
                    />
                }
            />
        );
    },
);
