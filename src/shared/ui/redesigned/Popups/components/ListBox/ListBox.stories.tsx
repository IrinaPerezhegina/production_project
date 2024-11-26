import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/ListBox/Redesigned',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '300px' }}>
                <Story />
            </div>
        ),
        ThemeDecorator(Theme.DARING),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        {
            content: '12yyutyfsfd3',
            value: '123',
        },
        {
            content: 'sytuytdss',
            value: '1234',
        },
        {
            content: 'wetutyute',
            value: '565',
        },
        {
            content: 'ghtyutyutr',
            value: '2323',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        {
            content: '12fsfd3',
            value: '123',
        },
        {
            content: 'sdss',
            value: '1234',
        },
        {
            content: 'wee',
            value: '565',
        },
        {
            content: 'ghtr',
            value: '2323',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        {
            content: '12fsfd3',
            value: '123',
        },
        {
            content: 'sdss',
            value: '1234',
        },
        {
            content: 'wee',
            value: '565',
        },
        {
            content: 'ghtr',
            value: '2323',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        {
            content: '12fsfd3',
            value: '123',
        },
        {
            content: 'sdss',
            value: '1234',
        },
        {
            content: 'wee',
            value: '565',
        },
        {
            content: 'ghtr',
            value: '2323',
        },
    ],
};
