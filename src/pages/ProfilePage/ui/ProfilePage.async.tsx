import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
