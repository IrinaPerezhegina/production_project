import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus numquam architecto, est ipsam deserunt quis magnam sapiente quae facilis eligendi, eveniet doloribus nesciunt totam omnis, aspernatur in cumque mollitia.',
};
