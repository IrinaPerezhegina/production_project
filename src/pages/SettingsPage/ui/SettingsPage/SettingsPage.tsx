import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './SettingsPage.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

const SettingsPage = memo(() => {
    const { t } = useTranslation('settings');

    return (
        <Page className={cls.SettingsPage}>
            <VStack gap="16">
                <Text title={t('user Settings')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});
export default SettingsPage;
