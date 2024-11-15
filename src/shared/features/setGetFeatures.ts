import { FeatureFlags } from '../types/featureFlags';

// Фичи не меняются в рамках сессии, их необязательно делать реактивными
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    if (!featureFlags) {
        return false;
    }
    return featureFlags[flag];
}
