import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));