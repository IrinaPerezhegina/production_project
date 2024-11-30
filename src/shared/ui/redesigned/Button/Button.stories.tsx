import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Icon } from '../Icon';
import IconButton from '@/shared/assets/icons/arrow.svg';

export default {
    title: 'shared/Button/Redesigned',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};
export const ClearXlRedesigned = Template.bind({});
ClearXlRedesigned.args = {
    children: 'Text',
    variant: 'clear',
    size: 'xl',
};

export const ClearLRedesigned = Template.bind({});
ClearLRedesigned.args = {
    children: 'Text',
    variant: 'clear',
    size: 'l',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlineXlRedesigned = Template.bind({});
OutlineXlRedesigned.args = {
    children: 'Text New',
    variant: 'outline',
    size: 'xl',
};
export const ClearMRedesigned = Template.bind({});
ClearMRedesigned.args = {
    children: 'Text New',
    variant: 'clear',
    size: 'm',
};

export const OutlineDarkRedesigned = Template.bind({});
OutlineDarkRedesigned.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineDarkRedesigned.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLRedesigned = Template.bind({});
OutlineLRedesigned.args = {
    children: 'Text New',
    variant: 'outline',
    size: 'l',
};
export const OutlineMRedesigned = Template.bind({});
OutlineMRedesigned.args = {
    children: 'Text New',
    variant: 'outline',
    size: 'm',
};

export const WithAddonLeft = Template.bind({});
WithAddonLeft.args = {
    children: 'Text New',
    variant: 'outline',
    size: 'm',
    addonLeft: <Icon Svg={IconButton} />,
};

export const WithAddonRight = Template.bind({});
WithAddonRight.args = {
    children: 'Text New',
    variant: 'outline',
    size: 'm',
    addonRight: <Icon Svg={IconButton} />,
};
