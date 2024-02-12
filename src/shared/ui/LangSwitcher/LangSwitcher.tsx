import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
className?: string;
}

export const LangSwitcher=({className}:LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

    const toogle = async () => {
			i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
		};
 return (
			<Button
				className={classNames(cls.LangSwitcher, {}, [className])}
				theme={ThemeButton.CLEAR}
				onClick={toogle}
			>
				{t("Язык")}
			</Button>
	
 );
}






