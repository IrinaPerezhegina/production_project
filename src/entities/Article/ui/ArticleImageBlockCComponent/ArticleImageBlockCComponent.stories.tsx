import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlockCComponent } from './ArticleImageBlockCComponent';

export default {
   title: 'shared/ArticleImageBlockCComponent',
   component: ArticleImageBlockCComponent,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleImageBlockCComponent>;

const Template: ComponentStory<typeof ArticleImageBlockCComponent> = (args) => <ArticleImageBlockCComponent { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
