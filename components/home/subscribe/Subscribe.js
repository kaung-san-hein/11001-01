import useTop from "@/hooks/useTop";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  const top = useTop();

  return (
    <>
      <div className={top ? styles.hide : styles.container}></div>
      <div className={top ? styles.hide : styles.labelContainer}>
        <div className={styles.label}>New Apple Originals every month.</div>
        <div className={styles.label}>
          Stream on the Apple TV app on Apple devices,smarts TVs,consoles,or
          sticks.
        </div>
        <div className={styles.label}>Share Apple TV+ with your family.</div>
      </div>
    </>
  );
};

export default Subscribe;
