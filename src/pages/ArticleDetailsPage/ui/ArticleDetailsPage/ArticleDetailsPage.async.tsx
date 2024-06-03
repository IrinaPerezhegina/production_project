import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
