import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { Icon } from '../Icon';
import SearchIcon from '../../../assets/icons/search.svg';

export default {
    title: 'shared/Input/Redesigned',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
    placeholder: 'Type text',
    value: '12212',
    addonLeft: <Icon Svg={SearchIcon} />,
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
    placeholder: 'Type text',
    value: '12212',
    autofocus: true,
    addonRight: <Icon Svg={SearchIcon} />,
};
