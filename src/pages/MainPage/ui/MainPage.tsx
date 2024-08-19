import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main Page')}
            <StarRating />
        </Page>
    );
});

export default MainPage;
