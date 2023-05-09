import React from "react";
import { motion } from "framer-motion";
import { animationCurve, backgroundCAlt, fontC, fontCAlt, textDecorationThickness } from '@/utils/framerHelper'
import styles from '../styles/LangaugeToggle.module.scss';
import { LANGUAGES, useLanguageStore } from "@/utils/hooks";

export const LanguageToggle = () => {
  const transiton = { duration: .25, easings: animationCurve };
  const lang = useLanguageStore((state) => state.lang)
  const setLang = useLanguageStore((state) => state.setLanguage)

  const toggler = (passedLang) =>
  <motion.span
    onClick={() => setLang(passedLang)}
    style={{
      background: lang === LANGUAGES[passedLang] ? backgroundCAlt : 'transparent',
      borderRadius: '.5rem',
      padding: '.5rem',
      color: lang === LANGUAGES[passedLang] ? fontCAlt : fontC,
      textDecoration: `${textDecorationThickness} underline solid transparent`,
      transition: transiton
    }}
    whileHover={{
      textDecoration: `${textDecorationThickness} underline solid ${fontC}`,
    }}
    transition={transiton}
  >
    {LANGUAGES[passedLang]}
  </motion.span>

  return (
    <h4 className={styles.LangToggle}>
      {toggler(0)}
      &nbsp;|&nbsp;
      {toggler(1)}
      &nbsp;|&nbsp;
      {toggler(2)}
    </h4>
  )
}