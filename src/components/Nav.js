import { motion } from "framer-motion";
import LogoTitle from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import styles from "../styles/Nav.module.scss";
import copy from "@/copy";
import { useLanguageStore } from "@/utils/hooks";
import Link from "next/link";

export const Nav = ({ ...props }) => {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <motion.div className={styles.Nav} {...props}>
      <ul>
        <li>
          <Link href="/info">{copy.menu.info[lang]}</Link>
        </li>
        <li>
          <Link href="/serv">{copy.menu.services[lang]}</Link>
        </li>
        <li>
          <Link href="/contact">{copy.menu.contact[lang]}</Link>
        </li>
      </ul>
      <LanguageToggle />
    </motion.div>
  );
};
