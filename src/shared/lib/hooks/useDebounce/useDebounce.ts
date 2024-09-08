import { MutableRefObject, useCallback, useRef } from 'react';

/*
*Хук, который позволяет отменять предыдущий вызов функции по не истечет delay
* @params callback
* @params delay - задержка в мс
*/

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
