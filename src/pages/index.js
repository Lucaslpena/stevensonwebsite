import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import LogoTitle from "@/components/Logo";
import { motion, useTransform } from "framer-motion";
import { animationCurve } from "@/utils/framerHelper";
import copy from "@/copy";
import { useLanguageStore } from "@/utils/hooks";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Head>
        <title>{copy.healthCenter[lang]}</title>
        <meta
          name="description"
          content="Mikel Stevenson Osasun Zentroa, Health Clinic, Centro de Salud"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25, easings: animationCurve }}
        className={`${styles.main} ${inter.className}`}
      >
        <div className={styles.Content}>
          <p>
            <span>{copy.home.heading[lang]}</span> {copy.home.body[lang]}
          </p>
          <motion.div style={{ position: "relative" }}>
            <Image
              src="/images/0D9A9074.jpg"
              alt="Mikel Stevenson Osasun Zentroa"
              placholder="blur"
              fill={true}
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <LogoTitle />
        </div>
      </motion.div>
    </>
  );
}
