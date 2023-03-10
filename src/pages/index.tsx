import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Icon from './Icon'
import { Toaster, toast } from 'sonner';
import { CSSProperties, useState } from 'react';
import Blanket from './Blanket';
import Plans from './Plans';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const icons = [
    'archive','archive-check','archive-down','archive-up','bell','bolt','box','box-rotate','box-search','camera','chevron-bottom','chevron-left','chevron-right','chevron-top',
    'clipboard','earth','file','file-check','file-down','file-search','file-up','flag','folder','folder-check','folder-down','folder-search','folder-up','headphones','home','link',
    'link-break','lock-locked','lock-unlocked','monitor','pencil','phone','plug','search','shop','wand',
  ];

  const pro = [
    'archive-check', 'archive-down', 'archive-up', 'earth', 'file-check', 'file-search', 'file-search', 'headphones', 'plug', 'wand', 'phone', 'monitor', 'camera', 'shop', 'folder-up', 'folder-down', 'folder-check', 'folder-search'
  ];

  let [mouse, setMouse] = useState<[number, number]>([0, 0]);
  let [showingPro, setShowingPro] = useState(false);

  return (
    <>
      <Head>
        <title>refresh.</title>
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
        <div className={styles.hero}>
          <h1 className={styles.heading}>
            Beautiful <span className={styles.light}>15px</span> icons, <br/> added <span className={styles.light}>weekly</span>.
          </h1>
          <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>

          <div className={styles.heroGradient}></div>
        </div>

        <div className={styles.navbar}>
          <div className={styles.searchContainer} onClick={() => document.getElementById('search')?.focus()}>
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1457 11.5914C8.82468 13.9143 5.06172 13.9143 2.74074 11.5914C0.419754 9.26855 0.419754 5.50247 2.74074 3.17963C5.06172 0.85679 8.82468 0.85679 11.1457 3.17963C13.4667 5.50247 13.4667 9.26855 11.1457 11.5914ZM11.1457 11.5914L16.1122 16.562" stroke="currentColor" stroke-width="2"/>
            </svg>
            <input spellCheck="false" autoComplete="false" id="search" type="text" className={styles.search} placeholder='Search 40 icons' />
          </div>
          <button className={styles.bepro} id="bepro" onMouseMove={e => {
            const element = document.getElementById('bepro');
            if (!element) return;
            
            setMouse([e.clientX - element.offsetLeft, e.clientY - element.offsetTop]);
          }} style={{
            "--mousex": `${mouse[0]}px`,
            "--mousey": `${mouse[1]}px`
          } as CSSProperties}>
            🔥 Get pro
            <div className={styles.glow}></div>  
          </button>
        </div>

        <div className={styles.icons}>
          {icons.map((value, index) => (
            <Icon name={value} pro={pro.includes(value)} label={value} showPro={() => setShowingPro(true)}>
              <img draggable="false" src={`/icons-svg/${value}.svg`} alt="" style={{ /* Unholy CSS magic */ filter: 'invert(100%) sepia(0%) saturate(3356%) hue-rotate(328deg) brightness(101%) contrast(110%)' }} />
            </Icon>
          ))}
        </div>

        {showingPro ? <Blanket close={() => setShowingPro(false)}>
          <Plans></Plans>
        </Blanket> : <></>}
      </main>

      <Toaster theme="dark" closeButton richColors />
    </>
  )
}
