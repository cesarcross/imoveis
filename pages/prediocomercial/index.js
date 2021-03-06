import { useState } from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import {
  FaShower,
  FaBuilding,
  FaRulerHorizontal,
  FaMapMarkerAlt,
  FaCar,
  FaHandshake,
} from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';
import { GiOfficeChair } from 'react-icons/gi';
import { GrDocumentText } from 'react-icons/gr';
import styles from '../../styles/Imovel.module.scss';

const Aguas = () => {
  let picture = (
    <Image
      src='/firma.jpeg'
      alt='Apartamento em Águas de Lindóia'
      width={710}
      height={500}
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
              <p>500 m²</p>
            </li>
            <li>
              <GiOfficeChair />
              <p>3 Salas Comerciais</p>
            </li>
            <li>
              <FaShower />
              <p>7 Banheiros</p>
            </li>
          </ul>

          <ul>
            <li>
              <FaMapMarkerAlt />
              <p>Excelente Localização</p>
            </li>
            <li>
              <MdKitchen />
              <p>3 Cozinhas</p>
            </li>

            <li>
              <FaCar />
              <p>5 Vagas</p>
            </li>
          </ul>

          <ul>
            <li>
              <FaBuilding />
              <p>3 Pavimentos </p>
            </li>
            <li>
              <GrDocumentText />
              <p>Documentação Em Dia</p>
            </li>
            <li>
              <FaHandshake />
              <p>Com Inquilino</p>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <div className={styles.price}>
        <p>R$ 1.900.000</p>
      </div>
    </div>
  );
};

export default Aguas;
