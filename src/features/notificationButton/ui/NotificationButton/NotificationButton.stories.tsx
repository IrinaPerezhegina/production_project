import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Notification } from 'entities/Notification/model/types/notification';
import { NotificationButton } from './NotificationButton';

const notification:Notification = {
    id: '1',
    description: 'Title',
    title: 'Description',
    userId: '2',

};

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, (Story) => <div style={{ paddingLeft: '600px', paddingTop: '20px' }}><Story /></div>],

} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
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
