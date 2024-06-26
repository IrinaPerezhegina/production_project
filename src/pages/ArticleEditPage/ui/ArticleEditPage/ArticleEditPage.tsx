import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = memo((props:ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams < { id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames('', {}, [className])}>
            { isEdit ? t('Article Edit Page') : t('Article create Page')}
        </Page>
    );
});

export default ArticleEditPage;
