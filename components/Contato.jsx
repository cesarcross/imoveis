import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../styles/Contato.module.scss";
import Image from "next/image";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Contato = () => {
  return (
    <>
      <div className={styles.mobilewhats}>
        <a href="https://wa.me/5511981263581" target="_blank">
          <Image src="/whats.png" width="50" height="50" layout="fixed" />
          <p>Entre em contato pelo Whatsapp </p>
        </a>
      </div>
      <div className={styles.mobilewhats}>
        <MdOutlineMarkEmailRead />
        <p>cesarcorregiari@gmail.com</p>
      </div>
    </>
  );
};

export default Contato;
