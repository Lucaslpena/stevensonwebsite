import React, { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import LogoTitle from '@/components/logoTitle'
import { ContentWrapper } from '@/components/contentWrapper'

const inter = Inter({ subsets: ['latin'] })

const copy = {
  healthCenter: {
    "EUS": "Osasun Zentroa",
    "ESP": "Centro de Salud",
    "ENG": "Health Clinic"
  },
  menu: {
    info: {
      "EUS": "Informazioa",
      "ESP": "Información",
      "ENG": "Information"   
    },
    services: {
      "EUS": "Zerbitzuak",
      "ESP": "Servicios",
      "ENG": "Services"
    },
    contact: {
      "EUS": "Kontaktua",
      "ESP": "Contacto",
      "ENG": "Contact"
    },
  },
}


export default function Home() {
  const [ lang, setLang] = useState('EUS');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mikel Stevenson Osasun Zentroa, Health Clinic, Centro de Salud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <LogoTitle />
          <div>
            <h3 className={styles.LangToggle}>
              <span onClick={() => setLang('EUS')}>EUS</span>
              &nbsp;|&nbsp;
              <span onClick={() => setLang('ESP')}>ESP</span>
              &nbsp;|&nbsp;
              <span onClick={() => setLang('ENG')}>ENG</span>
              </h3>
            <h2>
  {copy.healthCenter[lang]}</h2>
            </div>
        </div>
          <ContentWrapper copy={copy} lang={lang} />
      </main>
    </>
  )
}
