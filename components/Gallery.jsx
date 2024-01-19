import Image from "next/image";
import styles from "../styles/Imovel.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.imageSize}>
        <Image
          src="/casa.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
          // layout={'fill'}
          // objectFit={'contain'}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa2.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa3.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa4.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa5.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa6.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa7.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa2.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa9.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
      <div className={styles.imageSize}>
        <Image
          src="/casa10.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>{" "}
      <div className={styles.imageSize}>
        <Image
          src="/casa11.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>{" "}
      <div className={styles.imageSize}>
        <Image
          src="/casa12.jpg"
          alt="Apartamento em Águas de Lindóia"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Gallery;
