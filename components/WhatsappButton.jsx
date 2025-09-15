import Image from "next/image";
import styles from "../styles/WhatsappButton.module.scss";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5511981263581"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >
      <Image src="/whats.png" width={60} height={60} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;
