import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';

export const initArticlesPage = createAsyncThunk<
void,
 URLSearchParams,
 ThunkConfig<string>>(
     'articlesPage/initArticlesPage',
     async (URLSearchParams, thunkAPI) => {
         const {
             getState, dispatch,
         } = thunkAPI;
         const inited = getArticlesPageInited(getState());
         if (!inited) {
            const orderFromUrl=URLSearchParams.get('order') as SortOrder
            const sortFromUrl=URLSearchParams.get('sort') as ArticleSortField
            const searchFromUrl=URLSearchParams.get('search') 
           
if (orderFromUrl) {
   dispatch(articlesPageActions.setOrder(orderFromUrl))
}

if (sortFromUrl) {
    dispatch(articlesPageActions.setSort(sortFromUrl))
}

if (searchFromUrl) {
    dispatch(articlesPageActions.setSearch(searchFromUrl))
}

            dispatch(articlesPageActions.initState());
             dispatch(fetchArticlesList({}));
         }
     },

 );
