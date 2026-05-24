import Image from "next/image";
import styles from "./index.module.css";

export const ToSearchIcon = () => {
  return (
    <div className={styles.circle}>
        <Image src='/icons/rectangle.svg' alt='Arrow Right' width={24} height={24} className={styles.rectangle}/>
    </div>
  );
};