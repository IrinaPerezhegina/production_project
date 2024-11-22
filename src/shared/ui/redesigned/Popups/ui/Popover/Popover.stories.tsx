import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';
import { Text } from '../../../Text/Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Popap</Button>,
    direction: 'bottom right',
    children: (
        <>
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
        </>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Popap</Button>,
    direction: 'top left',
    children: (
        <>
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
        </>
    ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Daring = Template.bind({});
Daring.args = {
    trigger: <Button>Popap</Button>,
    direction: 'bottom left',
    children: (
        <>
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
        </>
    ),
};
Daring.decorators = [ThemeDecorator(Theme.DARING)];
