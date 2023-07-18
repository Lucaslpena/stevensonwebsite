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
  const transiton = { duration: 0.125, easings: animationCurve };
  const lang = useLanguageStore((state) => state.lang);
  const setLang = useLanguageStore((state) => state.setLanguage);

  const containerVariants = {
    active: {
      background: "hsla(60, 4%, 11%, 1)",
      color: "hsla(40, 50%, 95%, 1)",
    },
    inactive: {
      background: "transparent",
      color: "hsla(60, 4%, 11%, 1)",
    },
  };

  const toggler = (passedLang) => (
    <motion.div
      onClick={() => setLang(passedLang)}
      initial="inactive"
      whileHover="active"
      animate={lang === LANGUAGES[passedLang] ? "active" : "inactive"}
      variants={containerVariants}
      transition={transiton}
    >
      <motion.h4 style={{ color: "unset" }}>{LANGUAGES[passedLang]}</motion.h4>
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
