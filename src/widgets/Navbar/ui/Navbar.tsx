/* eslint-disable max-len */
import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?:string;

}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('enter')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}

            >
                {t('Lorem ipsum dolor sit amet consectetur  adipisicing elit. Eius temporibus  numquam architecto, est ipsam deserunt quis magnam sapiente quae facilis eligendi, eveniet doloribus nesciunt totam omnis, aspernatur incumque mollitia')}
            </Modal>
        </div>
    );
};
export default Navbar;
