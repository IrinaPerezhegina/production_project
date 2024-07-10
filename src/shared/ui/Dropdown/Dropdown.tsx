import {
    Menu,
} from '@headlessui/react';
// import cls from './Dropdown.module.scss';

// interface DropdownProps {
//    className?: string;
// }

export function Dropdown() {
    return (
        <Menu>
            <Menu.Button />
            <Menu.Items>
                <Menu.Item>
                    <a className="block data-[focus]:bg-blue-100" href="/settings">
                        /
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a className="block data-[focus]:bg-blue-100" href="/support">
                        /
                    </a>
                </Menu.Item>

            </Menu.Items>
        </Menu>
    );
}
