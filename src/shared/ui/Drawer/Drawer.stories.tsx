import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './Drawer';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus numquam architecto, est ipsam deserunt quis magnam sapiente quae facilis eligendi, eveniet doloribus nesciunt totam omnis, aspernatur in cumque mollitia.',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus numquam architecto, est ipsam deserunt quis magnam sapiente quae facilis eligendi, eveniet doloribus nesciunt totam omnis, aspernatur in cumque mollitia.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
