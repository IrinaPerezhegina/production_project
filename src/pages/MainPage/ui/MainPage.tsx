import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main Page')}
            <HStack>
                <div>{t('sdfsdf')}</div>
                <div>{t('sdfsdf')}</div>
                <div>{t('sdfsdf')}</div>
                <ListBox />
                <div>{t('sdfsdf')}</div>
            </HStack>
        </Page>
    );
});

export default MainPage;
