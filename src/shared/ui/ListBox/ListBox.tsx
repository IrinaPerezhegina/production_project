import {
    Listbox as HListBox,
} from '@headlessui/react';
import { useState } from 'react';
import cls from './ListBox.module.scss';

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
];

export function ListBox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    return (
        <HListBox
            as="div"
            className={cls.listBox}
            value={selectedPerson}
            onChange={setSelectedPerson}
        >
            <HListBox.Button 
                className={cls.trigger}>
                {selectedPerson.name}
            </HListBox.Button>
            <HListBox.Options className={cls.options}>
                {people.map((person) => (
                    <HListBox.Option
                        key={person.id}
                        value={person}
                        className={cls.item}
                    >
                        {/* {({active, selected})=>()} */}
                        {person.name}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
}
