import styles from "@/styles/Blanket.module.css";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    close: () => void;
}

export default function Blanket(props: Props) {
    return <main className={styles.main} onClick={event => {
        if (event.currentTarget === event.target)
            props.close();
    }}>{props.children}</main>
}