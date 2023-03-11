import styles from '@/styles/Avatar.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { useAtom } from 'jotai';
import { accountState } from '../server';

export default function Avatar() {
    const [state, setState] = useAtom(accountState);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={styles.IconButton} aria-label="Customise options">
                
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
                    <DropdownMenu.Item className={styles.DropdownMenuItem} onClick={() => window.location.assign('/account')}>
                        Account
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={styles.DropdownMenuItem} onClick={() => setState("")}>
                        Log out
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )    
}