import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('translation');

    return (
        <Page data-testid="ForbiddenPage">
            {t('you do not have access to this page')}
        </Page>
    );
});

export default ForbiddenPage;
