import styles from "@/styles/Plans.module.css";

export default function Plans() {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>You must be pro for that.</h1>
            <p className={styles.description}>Purchase a subscription for <span className={styles.orange}>$49.99</span>/year.</p>
            <button className={styles.bepro}>Let's go →</button>
        </main>
    )
}