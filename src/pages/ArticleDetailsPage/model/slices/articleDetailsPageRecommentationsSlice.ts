import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    ArticleDetailsRecommendationsSchema,
} from '../types/ArticleDetailsRecommendationsSchema';

// import {
//     fetchCommentsByArticleId,
// } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,

});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.ArticleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             fetchCommentsByArticleId.fulfilled,
    //             (state, action :PayloadAction<Article[]>) => {
    //                 state.isLoading = false;
    //                 recommendationsAdapter.setAll(state, action.payload);
    //             },
    //         )
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});
export const {
    reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice;
