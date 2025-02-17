import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // нельзя для реальных проектов ignore включать
            setTimeout(() => resolve(import('./AddCommentForm')), 1500);
        }),
);
