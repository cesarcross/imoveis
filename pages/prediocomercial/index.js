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
      src='/firma.jpeg'
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
        <h3>Prédio Comercial</h3>
        <p>Bairro do Limão</p>
        <p>Zona Norte / SP</p>
      </div>

      <div className={styles.mainPicture}>{mainPicture}</div>
      <div className={styles.galeriaMobile}>
        <div className={styles.imageSize}>
          <Image
            src='/firma.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma.jpeg'
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
            src='/firma1.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma1.jpeg'
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
            src='/firma2.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma2.jpeg'
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
            src='/firma3.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma3.jpeg'
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
            src='/firma4.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma4.jpeg'
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
            src='/firma5.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma5.jpeg'
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
            src='/firma6.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma6.jpeg'
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
            src='/firma7.jpeg'
            alt='Apartamento em Águas de Lindóia'
            width={300}
            height={200}
            // layout={'fill'}
            // objectFit={'contain'}
            onClick={() => {
              console.log('imagem alterada');
              setMainPicture(
                <Image
                  src='/firma7.jpeg'
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
              <p>3 quartos</p>
            </li>
            <li>
              <FaShower />
              <p>2 banheiros</p>
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
              <p>1 vaga</p>
            </li>
          </ul>

          <ul>
            <li>
              <FaBuilding />
              <p>2 andar</p>
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
        <p>R$ 2.200.000</p>
      </div>
    </div>
  );
};

export default Aguas;
