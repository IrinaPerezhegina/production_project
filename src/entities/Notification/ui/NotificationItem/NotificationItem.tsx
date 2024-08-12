import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
   className?: string;
   item:Notification;
}

export const NotificationItem = memo((props:NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text
                title={item.title}
                text={item.description}
            />
        </Card>
    );
    if (item.href) {
        return (
            <AppLink
                className={cls.link}
                to={item.href}
                target="_blank"
            >
                {content}
            </AppLink>
        );
    }
    return content;
});
