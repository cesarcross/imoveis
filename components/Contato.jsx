import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from '../styles/Contato.module.scss';
import Image from 'next/image';

const messageSent = () =>
  toast.success('Mensagem enviada com sucesso!', {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });

const messageFailed = () =>
  toast.error('Desculpe-nos, houve algum problema.', {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });

const Contato = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('"Nome" é um campo necessário.'),
        // .max(15, 'Must be 15 characters or less')
        // .required(),
        email: Yup.string()
          .required('"Email" é um campo necessário.')
          .email('Endereço de email inválido'),
        // .required()
        message: Yup.string().required('"Mensagem" é um campo necessário.'),
        // .required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post('/api/mail', values)
          .then(function (response) {
            console.log({ response });
            console.log('sent', JSON.stringify(values, null, 2));
            messageSent();
          })
          .catch(function (error) {
            console.log({ error });
            messageFailed();
          });

        setSubmitting(false);
      }}
    >
      <div className={styles.container} id="contact">
        <Form className={styles.form}>
          <h2>Entre em contato</h2>

          <label htmlFor="name">Nome</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="message">Mensagem</label>
          <Field name="message" component="textarea" rows="10" />
          <ErrorMessage name="message" />

          <div className={styles.mobilewhats}>
            <a href="https://wa.me/5511981263581" target="_blank">
              {/* Image não deve ser children de <p>. Refatorar */}
              <p>Ou escreva pelo Whatsapp </p>
              <Image src="/whats.png" width="50" height="50" layout="fixed" />
            </a>

            <button type="submit">Enviar</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Contato;
