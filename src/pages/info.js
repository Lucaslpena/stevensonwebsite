import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Info.module.scss";
import LogoTitle from "@/components/Logo";
import { motion, useTransform } from "framer-motion";
import { animationCurve } from "@/utils/framerHelper";
import copy from "@/copy";
import { useLanguageStore } from "@/utils/hooks";
import Image from "next/image";
import { AnimatedHeader } from "@/components/AnimatedElements";
const inter = Inter({ subsets: ["latin"] });

export default function Info() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Head>
        <title>{copy.healthCenter[lang]}</title>{" "}
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
            <span>{copy.info.greeting.heading[lang]}</span>{" "}
            {copy.info.greeting.body[lang]}
          </p>
          <motion.div style={{ position: "relative" }}>
            <Image
              src="/images/0D9A9078.jpg"
              alt="Mikel Stevenson Osasun Zentroa"
              placholder="blur"
              fill={true}
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <div className={styles.Section}>
            <AnimatedHeader>{copy.info.studies.heading[lang]}</AnimatedHeader>
            <ul>
              {copy.info.studies.body.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.LogoContainer}>
            <Image
              src="/images/image_4-removebg-preview 1.png"
              alt="Escuela de Osteopatía de Madrid"
              placholder="blur"
              height={55}
              width={55}
              priority
            />
            <Image
              src="/images/image 6.png"
              alt="Escuela de Osteopatía de Madrid"
              placholder="blur"
              height={32}
              width={98}
              priority
            />
            <Image
              src="/images/image 2.png"
              alt="Escuela de Osteopatía de Madrid"
              placholder="blur"
              height={25}
              width={85}
              priority
            />
            <Image
              src="/images/image 3.png"
              alt="Escuela de Osteopatía de Madrid"
              placholder="blur"
              height={27}
              width={75}
              priority
            />
            <Image
              src="/images/Group 3.png"
              alt="Escuela de Osteopatía de Madrid"
              placholder="blur"
              height={26}
              width={82}
              priority
            />
          </div>
          <div className={styles.Section}>
            <AnimatedHeader>{copy.info.work.heading[lang]}</AnimatedHeader>
            <ul>
              {copy.info.work.body.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <LogoTitle />
        </div>
      </motion.div>
    </>
  );
}
