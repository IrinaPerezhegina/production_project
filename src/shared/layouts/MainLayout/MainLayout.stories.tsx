import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from './MainLayout';

export default {
    title: 'shared/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    content: (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores eum, perspiciatis earum numquam suscipit praesentium
            eligendi odit? Facere dicta non voluptas rem temporibus quo id
            nesciunt. Veritatis, aspernatur tenetur.
        </div>
    ),
    sidebar: (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores eum, perspiciatis earum numquam suscipit praesentium
            eligendi odit? Facere dicta non voluptas rem temporibus quo id
            nesciunt. Veritatis, aspernatur tenetur.
        </div>
    ),
    toolbar: (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores eum, perspiciatis earum numquam suscipit praesentium
            eligendi odit? Facere dicta non voluptas rem temporibus quo id
            nesciunt. Veritatis, aspernatur tenetur.
        </div>
    ),
    header: (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores eum, perspiciatis earum numquam suscipit praesentium
            eligendi odit? Facere dicta non voluptas rem temporibus quo id
            nesciunt. Veritatis, aspernatur tenetur.
        </div>
    ),
};
