import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateState(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/clock.svg"
        alt=""
        width={14}
        height={14}
      />
      <p className={styles.time}>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </p>
    </div>
  );
}
