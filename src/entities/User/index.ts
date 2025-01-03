export { initAuthData } from './model/services/initAuthData';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { useJsonSettings } from './model/selectors/jsonSettings';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';

export { UserRole } from './model/consts/consts';
