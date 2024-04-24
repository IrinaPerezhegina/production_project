import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem lorem',
    text: 'Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem lorem',
    text: 'Description',
    theme: TextTheme.ERROR,
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
