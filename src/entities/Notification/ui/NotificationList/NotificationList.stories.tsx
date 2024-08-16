import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notification';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notification:Notification = {
    id: '1',
    description: 'Title',
    title: 'Description',
    userId: '2',

};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ })];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                { ...notification, id: '3' },
                { ...notification, id: '4' },
                { ...notification, id: '5' },
                { ...notification, id: '6' },
            ],
        },
    ],
};

export const Daring = Template.bind({});
Daring.args = {};
Daring.decorators = [StoreDecorator({ }), ThemeDecorator(Theme.DARING)];
Daring.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                { ...notification, id: '3' },
                { ...notification, id: '4' },
                { ...notification, id: '5' },
                { ...notification, id: '6' },
            ],
        },
    ],
};
