import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card/Redesigned',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    paddingLeft: '20px',
                    paddingTop: '20px',
                    paddingRight: '20px',
                }}
            >
                <Story />
            </div>
        ),
        ThemeDecorator(Theme.DARING),
    ],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    padding: '24',
    variant: 'normal',
    children: <Text title="Redesigned" text="redesigned" />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    padding: '16',
    variant: 'outlined',
    children: <Text title="Redesigned" text="redesigned" />,
};

export const Light = Template.bind({});
Light.args = {
    padding: '16',
    variant: 'light',
    children: <Text title="Redesigned" text="redesigned" />,
};

export const LightPaddingMax = Template.bind({});
LightPaddingMax.args = {
    padding: '24',
    variant: 'light',
    children: <Text title="Redesigned" text="redesigned" />,
};
