/* eslint-disable irina-perezh-plugin/layer-imports */
import { Story } from '@storybook/react';
import '@/app/styles/index.scss';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
