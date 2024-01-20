import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../styles/Contato.module.scss";
import Image from "next/image";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IconContext } from "react-icons";

const Contato = () => {
  return (
    <div className={styles.container} id="contact">
      <h3>Entre em contato e agende sua visita!</h3>
      <div className={styles.content}>
        <a href="https://wa.me/5511981263581" target="_blank">
          <Image src="/whats.png" width="50" height="50" layout="fixed" />
          <p>Clique e fale pelo Whatsapp </p>
        </a>
      </div>
      <div className={styles.content}>
        <IconContext.Provider value={{ color: "43766C", size: "40px" }}>
          <div style={{ marginRight: "8px" }}>
            <MdOutlineMarkEmailRead />
          </div>
        </IconContext.Provider>
        <p>cesarcorregiari@gmail.com</p>
      </div>
    </div>
  );
};

export default Contato;
