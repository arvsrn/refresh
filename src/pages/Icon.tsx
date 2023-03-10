import styles from '@/styles/Icon.module.css';
import { PropsWithChildren } from 'react';
import { toast } from 'sonner';

interface Props extends PropsWithChildren {
    label: string;
    pro: boolean;
    name: string;
    showPro: () => void;
}

export default function Icon(props: Props) {
    return (
        <main className={styles.main} onClick={() => {
            const self = document.getElementById(props.name);

            if (!self) {
                toast.error('Icon does not exist.')
            } else if (props.pro) {
                props.showPro();
            } else {
                navigator.clipboard.writeText(self.innerHTML);
                toast.success(`Copied icon '${props.name}'`);
            }
        }}>
            <div id={props.name} className={styles.svg}>
                {props.children}
            </div>

            <p className={styles.label}>{props.label}</p>

            { props.pro ? <svg className={styles.prosOnly} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 2.13586V4.46195H7.875V2.13586H4.125ZM9.125 4.46195V2.11086C9.125 1.43432 8.57655 0.885864 7.9 0.885864H4.1C3.42345 0.885864 2.875 1.43432 2.875 2.11086V4.46195H2.5C1.60254 4.46195 0.875 5.18949 0.875 6.08695V10.2391C0.875 11.6889 2.05025 12.8641 3.5 12.8641H8.5C9.94975 12.8641 11.125 11.6889 11.125 10.2391V6.08695C11.125 5.18949 10.3975 4.46195 9.5 4.46195H9.125ZM2.5 5.71195C2.29289 5.71195 2.125 5.87984 2.125 6.08695V10.2391C2.125 10.9985 2.74061 11.6141 3.5 11.6141H8.5C9.25939 11.6141 9.875 10.9985 9.875 10.2391V6.08695C9.875 5.87984 9.70711 5.71195 9.5 5.71195H8.5H3.5H2.5Z" fill="currentColor"/>
            </svg> : <></> }
        </main>
    )
}