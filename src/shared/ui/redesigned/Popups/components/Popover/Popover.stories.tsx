import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';
import { Text } from '../../../Text/Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popover/Redesigned',
    component: Popover,
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
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const BottomRight = Template.bind({});
BottomRight.args = {
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

export const TopLeft = Template.bind({});
TopLeft.args = {
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

export const BottomLeft = Template.bind({});
BottomLeft.args = {
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

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>Popap</Button>,
    direction: 'top right',
    children: (
        <>
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
            <Text title="Title" text="Descriptions" />
        </>
    ),
};
