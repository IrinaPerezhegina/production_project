import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
