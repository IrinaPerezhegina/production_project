import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const LIGHT = Template.bind({});
LIGHT.args = {
    isOpen: true,
};
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
