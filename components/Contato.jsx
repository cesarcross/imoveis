import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from '../styles/Contato.module.scss';
import Image from 'next/image';

const messageSent = () =>
  toast.success(`Mensagem enviada com sucesso!`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });

const messageFailed = () =>
  toast.error(`Por favor preencha todos os campos`, {
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
        name: Yup.string(),
        // .max(15, 'Must be 15 characters or less')
        // .required(),
        email: Yup.string().email('Invalid email address'),
        // .required()
        message: Yup.string(),
        // .required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('sent', JSON.stringify(values, null, 2));
        axios
          .post('/api/mail', values)
          .then(function (response) {
            console.log(response);
            messageSent();
          })
          .catch(function (error) {
            console.log(error);
            const { name, email, message } = values;
            if (name || email || message === '') {
              return messageFailed();
            }
          });
        setSubmitting(false);
      }}
    >
      <div className={styles.container} id='contact'>
        <Form className={styles.form}>
          <h2>Entre em contato</h2>

          <label htmlFor='name'>Nome</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' />

          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' />

          <label htmlFor='message'>Mensagem</label>
          <Field name='message' component='textarea' rows='10' />
          <ErrorMessage name='message' />

          <div className={styles.mobilewhats}>
            <a href='https://wa.me/5511981263581' target='_blank'>
              {/* Image não deve ser children de <p>. Refatorar */}
              <p>
                Ou escreva pelo Whatsapp{' '}
                <Image src='/whats.png' width={50} height={50} />
              </p>
            </a>

            <button type='submit'>Enviar</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Contato;
