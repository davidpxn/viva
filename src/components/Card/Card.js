import Head from "next/head";
import Image from "next/image";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <span className={styles.valueContainer}>
        <p className={styles.value}>{props.value}</p>
        <p className={styles.metric}>{props.metric}</p>
      </span>
    </div>
  );
}
