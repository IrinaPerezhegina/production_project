import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { User } from '@/entities/User';

const user: User = {
    id: '1',
    username: 'admin',
    avatar: 'https://cdn.fishki.net/upload/post/2019/10/28/3125789/depositphotos-hacker.jpg',
};
export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    author: user,
    createdAt: '12.04.2024',
    views: 300,
};
Normal.decorators = [StoreDecorator({})];
