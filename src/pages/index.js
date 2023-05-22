import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
// import LogoTitle from "@/components/Logo";
// import ContentWrapper from "@/components/ContentWrapper";
// import LanguageToggle from "@/components/LanguageToggle";
import { motion, useTransform } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import {
  animationCurve,
  backgroundC,
  backgroundCAlt,
  fontC,
  fontCAlt,
  textDecorationThickness,
} from "@/utils/framerHelper";
import copy from "@/copy";
import { useLanguageStore } from "@/utils/hooks";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);
  const ref = useRef(null);

  const [cursorVariant, setCursorVariant] = useState("default");
  const mouse = useMouse(ref);

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
    mass: 0.8,
  };
  const variants = {
    default: {
      opacity: 1,
      height: "1.5rem",
      width: "1.5rem",
      fontSize: "16px",
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
    },
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Mikel Stevenson Osasun Zentroa, Health Clinic, Centro de Salud"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25, easings: animationCurve }}
        className={`${styles.main} ${inter.className}`}
        ref={ref}
      >
        <motion.div>
          <LogoTitle />
          <div>
            <LanguageToggle />
            <h3>{copy.healthCenter[lang]}</h3>
          </div>
        </motion.div>
        <ContentWrapper />
      </motion.div> */}
      <motion.div
        variants={variants}
        className={styles.Cursor}
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText"></span>
      </motion.div>
    </>
  );
}
