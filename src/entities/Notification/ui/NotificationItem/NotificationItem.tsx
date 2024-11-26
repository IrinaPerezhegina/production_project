import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </CardDeprecated>
            }
            on={
                <Card
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
        />
    );
    if (item.href) {
        return (
            <AppLink className={cls.link} to={item.href} target="_blank">
                {content}
            </AppLink>
        );
    }
    return content;
});
