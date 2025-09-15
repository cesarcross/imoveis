import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../styles/Contato.module.scss";
import Image from "next/image";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IconContext } from "react-icons";
import DownloadPresentation from "./DownloadPresentation";

const Contato = () => {
  return (
    <div className={styles.container} id="contact">
      <h3>Entre em contato e agende sua visita!</h3>
      <DownloadPresentation/>
    <div className={styles.content}>
  <a href="https://wa.me/5511981263581" target="_blank">
    <Image src="/whats.png" width="40" height="40" alt="Whatsapp" />
    <p>Clique e fale pelo Whatsapp</p>
  </a>
</div>
 <div className={styles.content}>
  <MdOutlineMarkEmailRead size={40} color="#43766C" />
  <p>cesarcorregiari@gmail.com</p>
</div>
    </div>
  );
};

export default Contato;
