import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation('translation');
    const { increment, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleInc} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={handleDec} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
