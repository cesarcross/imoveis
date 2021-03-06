import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import {
  FaBed,
  FaShower,
  FaBuilding,
  FaRulerHorizontal,
  FaMountain,
  FaMapMarkerAlt,
  FaCar,
  FaSwimmer,
} from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import styles from '../../styles/Imovel.module.scss';

const Aguas = () => {
  let picture = (
    <Image
      src='/aguas.jpeg'
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
        <h3>Excelente apartamento </h3>
        <p>Bairro Jardim Maciel</p>
        <p>Águas de Lindóia </p>
      </div>

      <div className={styles.video}>
        <iframe
          title='Apartamento em Águas de Lindóia'
          src='https://www.youtube.com/embed/otwOx7l45Gk'
          frameBorder='0'
          width='100%'
          height={200}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className={styles.mainPicture}>{mainPicture}</div>
      <div className={styles.galeriaMobile}>
        <div className={styles.imageSize}>
          <Image
            src='/aguas.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas.jpeg'
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
            src='/aguas1.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas1.jpeg'
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
            src='/aguas2.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas2.jpeg'
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
            src='/aguas3.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas3.jpeg'
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
            src='/aguas4.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas4.jpeg'
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
            src='/aguas5.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas5.jpeg'
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
            src='/aguas6.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas6.jpeg'
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
            src='/aguas7.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/aguas7.jpeg'
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
              <p>139 m²</p>
            </li>
            <li>
              <FaBed />
              <p>3 Quartos</p>
            </li>
            <li>
              <FaShower />
              <p>2 Banheiros</p>
            </li>
          </ul>

          <ul>
            <li>
              <FaMapMarkerAlt />
              <p>Excelente localização</p>
            </li>
            <li>
              <MdPets />
              <p>Aceita animais</p>
            </li>

            <li>
              <FaCar />
              <p>1 Vaga</p>
            </li>
          </ul>

          <ul>
            <li>
              <FaBuilding />
              <p>2 Andar</p>
            </li>
            <li>
              <FaSwimmer />
              <p>Piscina</p>
            </li>
            <li>
              <FaMountain />
              <p>Vista livre</p>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <div className={styles.price}>
        <p>R$ 360.000</p>
      </div>
    </div>
  );
};

export default Aguas;
