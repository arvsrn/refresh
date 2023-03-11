import styles from '@/styles/Avatar.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import React from 'react';

export default function Avatar() {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={styles.IconButton} aria-label="Customise options">
                
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
                    <DropdownMenu.Item className={styles.DropdownMenuItem}>
                        Account
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={styles.DropdownMenuItem}>
                        Log out
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )    
}