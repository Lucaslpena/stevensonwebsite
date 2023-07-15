import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import copy from "@/copy";
import styles from "../styles/Info.module.scss";
import { LANGUAGES, useLanguageStore } from "@/utils/hooks";
import Image from "next/image";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

const Info = ({ ...props }) => {
  const lang = useLanguageStore((state) => state.lang);

  // const [quickNavSticky, setQuickNavSticky] = useState(0);
  // useEffect(() => {
  //   const stick = quickNavRef.current.getClientRects();
  //   console.log({ item: quickNavRef.current, stick });
  //   setQuickNavSticky(stick[0].top);
  // }, [quickNavSticky]);

  const containerRef = useRef(null);

  return (
    <div className={styles.Info} {...props}>
      <div className={styles.TopRow}>
        <div>
          <div className={styles.Headshot}>
            <Image
              src="/images/mikel.jpg"
              alt="Mikel Stevenson Osasun Zentroa"
              placholder="blur"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
        <div>
          <h4>{copy.info.greeting.body[lang]}</h4>
        </div>
      </div>

      <div className={styles.MiddleRow}>
        <p>{copy.info.studies.heading[lang]}</p>
        <hr />
        <ul>
          {copy.info.studies.body.map((study, i) => (
            <li key={i}>
              <p>
                <DoubleArrowRightIcon />
                &nbsp;{study}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.BottomRow}>
        <p>{copy.info.work.heading[lang]}</p>
        <hr />
        <ul>
          {copy.info.work.body.map((work, i) => (
            <li key={i}>
              <p>
                <DoubleArrowRightIcon />
                &nbsp;{work}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
