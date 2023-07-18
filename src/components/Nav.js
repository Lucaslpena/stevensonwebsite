import { LayoutGroup, motion } from "framer-motion";
import LogoTitle from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import styles from "../styles/Nav.module.scss";
import copy from "@/copy";
import { useLanguageStore } from "@/utils/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { animationCurve, ozBlack, ozWhite } from "@/utils/framerHelper";
import { useEffect } from "react";

export const Nav = ({ ...props }) => {
  const lang = useLanguageStore((state) => state.lang);
  const router = useRouter();
  const transiton = { duration: 0.125, easings: animationCurve };

  const variants = {
    active: {
      background: ozBlack,
      color: ozWhite,
    },
    inactive: {
      color: ozBlack,
      background: "transparent",
    },
  };

  const data = [
    { name: copy.menu.info[lang], path: "/info" },
    { name: copy.menu.services[lang], path: "/serv" },
    { name: copy.menu.contact[lang], path: "/contact" },
  ];

  return (
    <motion.div className={styles.Nav} {...props}>
      <ul>
        {data.map((item, index) => (
          <motion.li
            key={index}
            whileHover="active"
            animate={router.pathname === item.path ? "active" : "inactive"}
            transition={transiton}
            variants={variants}
          >
            <Link href={item.path}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>
      <LanguageToggle />
    </motion.div>
  );
};
