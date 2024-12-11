import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags, updateFeatureFlags } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');

    const isAppRedesigned = getFeatureFlags('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();
    const items = [
        {
            content: t('new'),
            value: 'new',
        },
        {
            content: t('old'),
            value: 'old',
        },
    ];
    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlags({
                    userId: authData?.id,
                    newFeatures: { isAppRedesigned: value === 'new' },
                }),
            ).unwrap();
            setIsLoading(false);
            forceUpdate();
        }
    };
    return (
        <HStack>
            <Text text={t('interface option')} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    onChange={onChange}
                    value={isAppRedesigned ? t('new') : t('old')}
                    items={items}
                    className={classNames(' ', {}, [className])}
                />
            )}
        </HStack>
    );
});
