import React from "react";
import { motion } from "framer-motion";
import {
  sand,
  textDecorationThickness,
  animationCurve,
} from "@/utils/framerHelper";
import styles from "../styles/LangaugeToggle.module.scss";
import { LANGUAGES, useLanguageStore } from "@/utils/hooks";

export const LanguageToggle = () => {
  const transiton = { duration: 0.25, easings: animationCurve };
  const lang = useLanguageStore((state) => state.lang);
  const setLang = useLanguageStore((state) => state.setLanguage);

  const toggler = (passedLang) => (
    <motion.div
      onClick={() => setLang(passedLang)}
      style={{
        background:
          lang === LANGUAGES[passedLang]
            ? "hsla(60, 4%, 11%, 1)"
            : "transparent",
        transition: transiton,
      }}
      transition={transiton}
    >
      <motion.h4
        style={{
          color:
            lang === LANGUAGES[passedLang]
              ? "hsla(40, 50%, 95%, 1)"
              : "hsla(60, 4%, 11%, 1)",
        }}
      >
        {LANGUAGES[passedLang]}
      </motion.h4>
    </motion.div>
  );

  return (
    <div className={styles.LangToggle}>
      {toggler(0)}
      {toggler(1)}
      {toggler(2)}
    </div>
  );
};

export default LanguageToggle;
