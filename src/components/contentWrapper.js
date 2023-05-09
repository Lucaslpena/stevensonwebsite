import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/utils/hooks";
import copy from "@/copy";
import styles from "../styles/ContentWrapper.module.scss";
import Info from "./Info";
import dynamic from "next/dynamic";
import Contact from "./Contact";

const MenuItem = ({ onClick, active, copy, svg }) => (
  <motion.li onClick={() => onClick(1)}>
    <h5>
      {copy}
      {svg}
    </h5>
  </motion.li>
);

export const ContentWrapper = ({ children, className, ...props }) => {
  const lang = useLanguageStore((state) => state.lang);

  const [viewing, setViewing] = useState(0);
  const router = useRouter();
  useEffect(() => {
    // if (viewing === 1) router.push("/?tab=1", undefined, { shallow: true });
    // if (viewing === 2) router.push("/?tab=2", undefined, { shallow: true });
    // if (viewing === 3) router.push("/?tab=3", undefined, { shallow: true });
  }, [router, viewing]);

  return (
    <div className={styles.Content}>
      <div>
        {viewing === 0 && (
          <Image
            src="/images/1.jpg"
            alt="Mikel Stevenson Osasun Zentroa"
            // width={200}
            // height={200}
            placholder="blur"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        )}
        {viewing === 1 && <Info />}
        {viewing === 2 && <div>Services</div>}
        {viewing === 3 && <Contact />}
      </div>
      <motion.nav
        // className={styles.Menu}
        style={{
          position: "absolute",
          bottom: "1rem",
          width: "100%",
          background:
            viewing > 0 ? "rgba(255, 255, 255, .0)" : "rgba(255, 255, 255, .4)",
          backdropFilter: viewing > 0 ? "blur(25px)" : "normal",
          zIndex: 2,
        }}
      >
        <ul className={styles.MenuInner}>
          <li onClick={() => setViewing(1)}>
            <h5>
              {copy.menu.info[lang]}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </h5>
          </li>
          <li onClick={() => setViewing(2)}>
            <h5>
              {copy.menu.services[lang]}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </h5>
          </li>
          <li onClick={() => setViewing(3)}>
            <h5>
              {copy.menu.contact[lang]}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </h5>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};
