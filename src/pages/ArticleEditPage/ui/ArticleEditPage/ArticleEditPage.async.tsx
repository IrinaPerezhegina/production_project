import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
