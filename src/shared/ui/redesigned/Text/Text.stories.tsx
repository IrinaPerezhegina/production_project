import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';

export default {
    title: 'shared/Text/Redesigned',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    align: 'center',
    variant: 'primary',
    title: 'Title lorem lorem',
    text: 'Description',
};

export const Accent = Template.bind({});
Accent.args = {
    align: 'left',
    title: 'Title lorem lorem',
    text: 'Description',
    variant: 'accent',
};

export const Error = Template.bind({});
Error.args = {
    align: 'right',
    title: 'Title lorem lorem',
    text: 'Description',
    variant: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem lorem',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem lorem',
    text: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem lorem',
    text: 'Description',
    size: 'l',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem lorem',
    text: 'Description',
    size: 'm',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem lorem',
    text: 'Description',
    size: 's',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
