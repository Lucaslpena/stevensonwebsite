import "@/styles/globals.scss";
import localFont from "next/font/local";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Topbar } from "@/components/TopBar";
import useMouse from "@react-hook/mouse-position";
import { Nav } from "@/components/Nav";

const matter = localFont({
  src: [
    {
      path: "../../public/fonts/Matter-Bold.woff",
      weight: "700",
      style: "normal ",
    },
    {
      path: "../../public/fonts/Matter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Matter-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/MatterSQ-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MatterSQ-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MatterSQ-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }) {
  const containerRef = useRef(null);
  const mouse = useMouse(containerRef);
  const [cursorVariant, setCursorVariant] = useState("default");
  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
    mass: 0.8,
  };
  const variants = {
    default: {
      opacity: 1,
      height: "1.5rem",
      width: "1.5rem",
      fontSize: "16px",
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
    },
  };
  return (
    <>
      <main ref={containerRef}>
        <Nav />
        <Component {...pageProps} />
      </main>
      <motion.div
        style={{
          position: "fixed",
          zIndex: 99,
          display: "flex",
          flexFlow: "row",
          alignContent: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          height: "1.5rem",
          width: "1.5rem",
          backgroundColor: "#fff",
          mixBlendMode: "difference",
          borderRadius: 200,
          pointerEvents: "none",
          color: "#fff",
          textAlign: "center",
          fontSize: 16,
          opacity: 0,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText"></span>
      </motion.div>
    </>
  );
}
