import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
   className?: string;
}

export const AvatarDropdown = memo((props:AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
    if (!authData) {
        return null;
    }
    return (
        <Dropdown
            className={classNames(cls.avatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('admin'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('profile'),
                    href: `${RoutePath.profile}/${authData.id}`,
                },
                {
                    content: t('exit'),
                    onClick: onLogout,
                },
            ]}
            direction="bottom left"
            trigger={<Avatar size={30} src={authData.avatar} />}
        />

    );
});
