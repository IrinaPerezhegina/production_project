import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

export const ArticlePageGreeting = memo(() => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('translation');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const text = (
        <Text
            title={t('welcome to the articles page')}
            text={t('here you can search and view articles on various topics')}
        />
    );
    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} lazy onClose={onClose}>
                {text}
            </Drawer>
        );
    }
    return (
        <Modal isOpen={isOpen} lazy onClose={onClose}>
            {text}
        </Modal>
    );
});
