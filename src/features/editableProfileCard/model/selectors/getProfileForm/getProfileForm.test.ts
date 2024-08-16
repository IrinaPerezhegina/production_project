import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const data = {
            first: 'Irina',
            username: 'admin',
            age: 34,
            country: Country.Russia,
            lastname: 'Perezhegina',
            currency: Currency.RUB,
            city: 'Tyumen',
        };
        const state:DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = { };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
