import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
   className?: string;
}
const reducers:ReducersList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {t('ArticleDetails')}
            </div>
        </DynamicModuleLoader>
    );
};
