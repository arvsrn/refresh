import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Icon from './Icon'
import { Toaster, toast } from 'sonner';
import { CSSProperties, useState } from 'react';
import Blanket from './Blanket';
import Plans from './Plans';
import Avatar from './Avatar';
import { signInWitPopup, accountState } from '../server';
import { useAtom } from 'jotai';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const icons = [
    'align-bottom','align-left','align-right','align-top','archive','archive-check','archive-down','archive-up','bell','bolt','box','box-rotate','box-search','camera',
    'chevron-bottom','chevron-left','chevron-right','chevron-top','clipboard','clock','config-horizontal','config-vertical','earth','file','file-check','file-down','file-search',
    'file-up','flag','folder','folder-check','folder-down','folder-search','folder-up','frame','headphones','home','link','link-break','lock-locked','lock-unlocked','monitor',
    'pencil','phone','plug','search','shop','wand','star','send-to-front','send-to-back','component','copy','cup','cup-straw','cancel','folder-cancel','file-cancel','cpu','database',
    'database-add','database-error','database-minus','file-add','file-minus','folder-add','folder-minus','check','balloon','emoji-sad','emoji-smile','emoji-emotionless',
    'round-bottom-flask','image','send','power','server','printer','user','users','brightness-low','brightness','user-add','user-minus','moon','ufo','keyboard','bank','pin','pin-rotated',
    'temprature-low','temprature-high','education','fan','gift','briefcase','gift-2','crown','90-degrees','45-degrees','calendar','calendar-add','calendar-minus','calendar-error',
    'calendar-search','trend-downwards','trend-upwards','cloud-rain','cloud','image-add','image-minus','image-cancel','camera-add','camera-minus','camera-search','camera-cancel',
    'align-center-horizontal','align-center-vertical','battery-low','battery-high','battery-medium','erlenmeyer-flask','test-tube','cursor','image-locked','file-locked','video-locked',
    'database-locked','folder-locked',
  ].sort();

  const pro: string[] = [
    // 'archive-check','archive-down','archive-up','box-rotate','box-search','brightness','brightness-low','calendar-add','calendar-minus','calendar-error','calendar-search','chemistry-flask',
    // 'database-add','database-error','database-minus','earth','file-add','file-minus','file-up','file-down','file-cancel','file-check','file-search','folder-up','folder-down','folder-search',
    // 'folder-cancel','folder-check','folder-minus','folder-add','printer','temprature-high','temprature-low','ufo','wand','image-add','image-minus','image-cancel','camera-add',
    // 'camera-minus','camera-search','camera-cancel','align-center-horizontal','align-center-vertical','battery-low','battery-high','battery-medium','image-locked','file-locked',
    // 'video-locked','database-locked','folder-locked',
  ];

  let [mouse, setMouse] = useState<[number, number]>([0, 0]);
  let [showingPro, setShowingPro] = useState(false);
  let [currentIcons, setCurrentIcons] = useState<Array<string>>(icons);
  let [state, setState] = useAtom(accountState);

  console.log(icons.length, pro.length)

  try {
    localStorage.setItem('state', state);
  } catch (exception) { /* HOW DO I DISABLE SSR PLEASE HELP 😭 */ }

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
          <div className={styles.navbarTopSection}>
            { 
              /*  
                state ? <Avatar></Avatar> :
                <button className={styles.bepro} onClick={() => signInWitPopup(setState)}>Log in</button> 
              */
            }
            <div className={styles.searchContainer} onClick={() => document.getElementById('search')?.focus()}>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1457 11.5914C8.82468 13.9143 5.06172 13.9143 2.74074 11.5914C0.419754 9.26855 0.419754 5.50247 2.74074 3.17963C5.06172 0.85679 8.82468 0.85679 11.1457 3.17963C13.4667 5.50247 13.4667 9.26855 11.1457 11.5914ZM11.1457 11.5914L16.1122 16.562" stroke="currentColor" stroke-width="2"/>
              </svg>
              <input spellCheck="false" autoComplete="false" id="search" type="text" className={styles.search} placeholder={`Search ${icons.length} icons`} onKeyUp={(event) => {
                let value = (document.getElementById('search') as HTMLInputElement)?.value;

                if (value !== undefined) {
                  const currentIcons_ = [];

                  for (const icon of icons) {
                    if (RegExp(value.toLowerCase()).test(icon)) currentIcons_.push(icon);
                  }

                  setCurrentIcons(currentIcons_);
                }
              }} />
            </div>
          </div>
          {
            /**
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
             */
          }
        </div>

        <div className={styles.icons}>
          {currentIcons.map((value, index) => (
            <div key={value} style={{
              flex: '1 1 0',
              height: '128px',
              minWidth: '150px',
            }}>
              <Icon name={value} pro={pro.includes(value)} label={value} showPro={() => setShowingPro(true)}>
                <img draggable="false" src={`/icons-svg/${value}.svg`} alt="" style={{ /* Unholy CSS magic */ filter: 'invert(100%) sepia(0%) saturate(3356%) hue-rotate(328deg) brightness(101%) contrast(110%)' }} />
              </Icon>
            </div>
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
