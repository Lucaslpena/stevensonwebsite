import React, { useState } from "react";
import { motion } from "framer-motion";
import copy from "@/copy";
import styles from "../styles/Info.module.scss";
import { LANGUAGES, useLanguageStore } from "@/utils/hooks";
import Image from "next/image";

const Info = () => {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <div className={styles.Info}>
      <div className={styles.TopRow}>
        <div className={styles.Headshot}>
          <Image
            src="/images/mikel.jpg"
            alt="Mikel Stevenson Osasun Zentroa"
            placholder="blur"
            width={200}
            height={200}
            priority
          />
        </div>
        <div>
          <small>{copy.info.greeting.heading[lang]}</small>
          <h2>{copy.info.greeting.body[lang]}</h2>
        </div>
      </div>

      <div className={styles.LogoScroll}>
        <div>
          <Image
            src="/images/credMikel.png"
            alt="Mikel Stevenson Osasun Zentroa"
            placholder="blur"
            fill
            priority
          />
        </div>
      </div>

      <div className={styles.BottomRow}>
        <div>
          <small>{copy.info.studies.heading[lang]}</small>
          <ul>
            {copy.info.studies.body.map((study, i) => (
              <li key={i}>
                <p>{study}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <small>{copy.info.work.heading[lang]}</small>
          <ul>
            {copy.info.work.body.map((study, i) => (
              <li key={i}>
                <p>{study}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
