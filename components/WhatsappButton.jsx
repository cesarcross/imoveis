import Image from "next/image";
import styles from "../styles/WhatsappButton.module.scss";

const WhatsappButton = () => {
  const handleWhatsAppClick = () => {
    // Verifica se a função gtag está disponível antes de disparar o evento
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-965907484/2N0gCKqmqJsbEJyoyswD',
          'value': 1.0,
          'currency': 'BRL'
      });
    }
  };

  return (
    <a
      href="https://wa.me/5511981263581"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      onClick={handleWhatsAppClick} // Adicionamos o evento de clique aqui
    >
      <Image src="/whats.png" width={60} height={60} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;