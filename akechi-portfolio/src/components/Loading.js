import React from "react";
import { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

import Head from "../assets/image/Loading_Head.png";
import Word from "../assets/image/Loading_Word.png";

function Loading() {
  return (
    <div
      style={{
        backgroundColor: "black",
        zIndex: 1000,
        position: "absolute",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "10%",
          height: "30%",
          bottom: "5%",
          right: "3%",
        }}
      >
        <motion.img
          src={Head}
          alt="Loading Head"
          style={{ width: "80%", aspectRatio: "277/442" }}
          animate={{ rotateY: [0, 360, 360] }}
          transition={{
            times: [0, 0.4, 1],
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={Word}
          alt="Loading Word"
          style={{ width: "100%", aspectRatio: "auto" }}
          animate={{ rotateY: [0, 360, 360] }}
          transition={{
            delay: 0.5,
            times: [0, 0.4, 1],
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default Loading;
