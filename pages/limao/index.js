import { useState } from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import {
  FaBed,
  FaShower,
  FaRulerHorizontal,
  FaCar,
  FaAppleAlt,
  FaCouch,
} from 'react-icons/fa';
import { MdPets, MdKitchen, MdLocalLaundryService } from 'react-icons/md';
import styles from '../../styles/Imovel.module.scss';

const Aguas = () => {
  let picture = (
    <Image
      src='/limao.jpeg'
      alt='Apartamento em Águas de Lindóia'
      width={710}
      height={500}
      // layout={'fill'}
      // objectFit={'contain'}
    />
  );

  const [mainPicture, setMainPicture] = useState(picture);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Duas casa em amplo terreno</h3>
        <p>Bairro do Limão</p>
        <p>Zona Norte / SP</p>
      </div>

      <div className={styles.mainPicture}>{mainPicture}</div>
      <div className={styles.galeriaMobile}>
        <div className={styles.imageSize}>
          <Image
            src='/limao.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao1.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao1.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao2.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao2.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao3.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao3.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao4.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao4.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao5.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao5.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao6.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao6.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
        <div className={styles.imageSize}>
          <Image
            src='/limao7.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/limao7.jpeg'
                  alt='Apartamento em Águas de Lindóia'
                  width={710}
                  height={500}
                />
              );
            }}
          />
        </div>
      </div>
      <div className={styles.infos}>
        <IconContext.Provider value={{ color: '0c4a60', size: '25px' }}>
          <ul>
            <li>
              <FaRulerHorizontal />
              <p>300 m²</p>
            </li>
            <li>
              <FaBed />
              <p>3 Quartos</p>
            </li>
            <li>
              <FaShower />
              <p>3 Banheiros</p>
            </li>
          </ul>

          <ul>
            <li>
              <MdKitchen />
              <p>2 Cozinhas</p>
            </li>
            <li>
              <MdPets />
              <p>Aceita animais</p>
            </li>

            <li>
              <FaCar />
              <p>1 vaga</p>
            </li>
          </ul>

          <ul>
            <li>
              <MdLocalLaundryService />
              <p>Lavanderia</p>
            </li>
            <li>
              <FaCouch />
              <p>2 Salas</p>
            </li>
            <li>
              <FaAppleAlt />
              <p>Pomar</p>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <div className={styles.price}>
        <p>R$ 550.000</p>
      </div>
    </div>
  );
};

export default Aguas;
