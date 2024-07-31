import { classNames } from 'shared/lib/ClassNames/classNames';
import { memo } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { profileReducer } from 'features/editableProfileCard/model/slices/profileSlice';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
className?: string;
}

const ProfilePage = memo(({ className }:ProfilePageProps) => (
    <DynamicModuleLoader reducers={reducers}>
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <ProfilePageHeader />
                <EditableProfileCard />
            </VStack>

        </Page>
    </DynamicModuleLoader>
));

export default ProfilePage;
