/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?:string;

}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {t('main')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};
export default Navbar;
