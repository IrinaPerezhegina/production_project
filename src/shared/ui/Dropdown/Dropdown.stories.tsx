import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const Normal = Template.bind({});
Normal.args = {

};
