import Image from "next/image";
import styles from "./Hero.module.scss";
import useTop from "@/hooks/useTop";

const Hero = () => {
  const top = useTop();

  return (
    <>
      {top && (
        <>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/img-1.jpg"
                alt="Hero"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.heroTitle}>All Apple Originals.</div>
            <div className={styles.heroTitle}>Only on Apple TV+.</div>
            <button>Stream now</button>
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
