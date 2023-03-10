import styles from "@/styles/Plans.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function Plans() {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>You must be pro for that.</h1>
            <p className={styles.description}>Purchase a lifetime license <span className={styles.orange}>$49.99</span>.</p>
            <button className={styles.bepro} onClick={() => window.location.assign('https://refresh.lemonsqueezy.com/checkout/buy/f160dd62-f358-43b6-bd98-9e6622b2daff')}>
                Let's go 
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateY(1px)' }}>
                    <path d="M7.04901 11.4205L5.87855 10.2614L9.38423 6.75568H0.867188V5.0625H9.38423L5.87855 1.5625L7.04901 0.397727L12.5604 5.90909L7.04901 11.4205Z" fill="currentColor"/>
                </svg>
            </button>
        </main>
    )
}