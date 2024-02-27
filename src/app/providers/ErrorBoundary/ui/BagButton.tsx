/* eslint-disable i18next/no-literal-string */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars

import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для текстирования
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const BagButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('translation');

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>

    );
};
