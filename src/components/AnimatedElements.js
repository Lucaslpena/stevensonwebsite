const { motion } = require("framer-motion");
import style from "../styles/AnimatedElements.module.scss";

export const AnimatedHeader = ({ children, ...props }) => (
  <motion.h3 className={style.AnimatedHeader} {...props}>
    {children}
  </motion.h3>
);
