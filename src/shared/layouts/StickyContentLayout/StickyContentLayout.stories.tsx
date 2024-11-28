import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StickyContentLayout } from './StickyContentLayout';

export default {
    title: 'shared/MainLayout',
    component: StickyContentLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args) => (
    <StickyContentLayout {...args} />
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
    right: (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores eum, perspiciatis earum numquam suscipit praesentium
            eligendi odit? Facere dicta non voluptas rem temporibus quo id
            nesciunt. Veritatis, aspernatur tenetur.
        </div>
    ),

    left: (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores eum, perspiciatis earum numquam suscipit praesentium
            eligendi odit? Facere dicta non voluptas rem temporibus quo id
            nesciunt. Veritatis, aspernatur tenetur.
        </div>
    ),
};
