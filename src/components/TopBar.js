import { motion } from "framer-motion";
import LogoTitle from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import styles from "../styles/Topbar.module.scss";
import copy from "@/copy";
import { useLanguageStore } from "@/utils/hooks";

export const Topbar = ({ ...props }) => {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <motion.div className={styles.Topbar} {...props}>
      <LogoTitle />
      <div>
        <LanguageToggle />
        <h3>{copy.healthCenter[lang]}</h3>
      </div>
    </motion.div>
  );
};
