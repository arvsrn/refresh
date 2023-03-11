import Head from "next/head";
import React, { useState } from 'react';
import styles from "@/styles/Account.module.css"
import { useAtom } from "jotai";
import { accountState } from "./server";
import { Toaster, toast } from "sonner";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { motion } from 'framer-motion';

export default function Account() {
    let [state, setState] = useAtom(accountState);
    let [confirm, setConfirm] = useState(false);
  
    return (
        <>
        <Head>
            <title>refresh — account</title>
            <meta name="title" content="refresh." />
            <meta name="description" content="Beautiful 15px icons, refresh'd weekly." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://refresh.aarv.me/" />
            <meta property="og:title" content="refresh." />
            <meta property="og:description" content="Beautiful 15px icons, refresh'd weekly." />
            <meta property="og:image" content="https://cdn.discordapp.com/attachments/1023648332750520341/1083766698148122654/image.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://refresh.aarv.me/" />
            <meta property="twitter:title" content="refresh." />
            <meta property="twitter:description" content="Beautiful 15px icons, refresh'd weekly." />
            <meta property="twitter:image" content="https://cdn.discordapp.com/attachments/1023648332750520341/1083766698148122654/image.png" />
        </Head>
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.heading} style={{ marginBottom: '24px' }}>Account settings</h1>

                <div className={styles.staticData}>
                    <p className={styles.textDark}>Email</p>
                    <p className={styles.textLight}>duclit451@gmail.com</p>
                </div>
                <div className={styles.staticData}>
                    <p className={styles.textDark}>Password</p>
                    <p className={styles.textLight}>You signed in with Google.</p>
                </div>
                <div className={styles.staticData} style={{ marginTop: '24px' }}>
                    <p className={styles.textDark}>License key</p>
                    <input className={styles.input} type="text" placeholder="xxxx-xxxx-xxxx-xxxx"></input>
                </div>

                <div className={styles.actions}>
                    <button className={styles.backButton} style={{ marginTop: '24px' }} onClick={() => window.location.assign('/')}>Back</button>
                    <button 
                        ref={useDetectClickOutside({ onTriggered: () => setConfirm(false) })} 
                        className={styles.button} 
                        style={{ marginTop: '24px' }} 
                        onClick={() => {
                            if (confirm) {
                                setState(""); 
                                window.location.assign('/');
                            } else
                                setConfirm(true);
                        }}
                    >
                        {confirm ? 'Are you sure?' : 'Log out'}
                    </button>
                </div>
            </div>
        </main>
        <Toaster theme="dark" closeButton richColors />
        </>
    )
}