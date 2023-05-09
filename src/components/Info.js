import React, { useState } from "react";
import { motion } from "framer-motion";
import copy from "@/copy";
import styles from "../styles/Info.module.scss";
import { LANGUAGES, useLanguageStore } from "@/utils/hooks";
import { Blanquerna } from "./Logo";
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
          <Blanquerna />
          <Blanquerna />
          <Blanquerna />
          <Blanquerna />
          <Blanquerna />
          <Blanquerna />
          <Blanquerna />
        </div>
      </div>

      <div className={styles.BottomRow}>
        <div>
          <h4>{copy.info.studies.heading[lang]}</h4>
          <ul>
            {copy.info.studies.body.map((study, i) => (
              <li key={i}>
                <p>{study}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{copy.info.work.heading[lang]}</h4>
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
