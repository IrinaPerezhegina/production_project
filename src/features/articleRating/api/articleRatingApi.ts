import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

const articleRatingsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], {userId:string, articleId:string }>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),

    }),
});
export const useGetArticleRating = articleRatingsApi
    .useGetArticleRatingQuery;
