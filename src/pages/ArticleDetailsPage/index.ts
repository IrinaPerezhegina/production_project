export { articleDetailsPageReducer } from './model/slices';

export type{ ArticleDetailsPageSchema } from './model/types/index';

export type{
    ArticleDetailsRecommendationsSchema,
} from './model/types/ArticleDetailsRecommendationsSchema';
export type{
    ArticleDetailsCommentsSchema,
} from './model/types/ArticleDetailsCommentsSchema';
export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
