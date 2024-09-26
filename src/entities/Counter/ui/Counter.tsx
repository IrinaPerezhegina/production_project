import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation('translation');
    const { add, increment, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1
                data-testid="value-title"
            >
                {counterValue}
            </h1>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                { t('increment')}
            </Button>
            <Button
                onClick={handleDec}
                data-testid="decrement-btn"
            >
                { t('decrement')}
            </Button>
            <Button
                onClick={handleAddFive}
                data-testid="decrement-btn"
            >
                { t('five')}
            </Button>
        </div>
    );
};
