import type {
    StateSchemaKey,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
} from './config/StateSchema';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';

import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
    StateSchemaKey,
};
