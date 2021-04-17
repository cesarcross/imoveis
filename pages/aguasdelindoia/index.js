import { IconContext } from 'react-icons';
import {
  FaBed,
  FaShower,
  FaBuilding,
  FaRulerHorizontal,
  FaCouch,
  FaMountain,
  FaMapMarkerAlt,
  FaCar,
  FaSwimmer,
} from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import styles from '../../styles/Imovel.module.scss';

const Aguas = () => {
  return (
    <div>
      <h2>Excelente apartamento em Águas de Lindóia</h2>

      <div className='video'>
        <iframe
          src='https://www.youtube.com/embed/otwOx7l45Gk'
          frameBorder='0'
          width='100%'
          height={200}
          title='Apartamento em Águas de Lindóia'
        />
      </div>
      <div className='galeria'></div>
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
      <p>Preço: R$ 360.000</p>
    </div>
  );
};

export default Aguas;
