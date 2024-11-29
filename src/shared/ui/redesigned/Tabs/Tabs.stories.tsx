import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs/Redesigned',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const NormalRow = Template.bind({});
NormalRow.args = {
    direction: 'row',

    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
    ],
    value: 'tab 3',
    onTabClick: action('onTabClick'),
};

export const NormalColumn = Template.bind({});
NormalColumn.args = {
    direction: 'column',
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
    ],
    value: 'tab 3',
    onTabClick: action('onTabClick'),
};
