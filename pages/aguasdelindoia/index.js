import { IconContext } from "react-icons";
import {
  FaBed,
  FaShower,
  FaBuilding,
  FaRulerHorizontal,
  FaMapMarkerAlt,
  FaCar,
} from "react-icons/fa";
import { MdPets, MdBalcony } from "react-icons/md";
import { IoMdFlower } from "react-icons/io";
import styles from "../../styles/Imovel.module.scss";

const Aguas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title} id="home">
        <h2>Bem-vindo ao seu novo lar em </h2>
        <h1>Águas de Lindóia! 🌄</h1>
      </div>

      <div className={styles.video}>
        <iframe
          title="Apartamento em Águas de Lindóia"
          src="https://www.youtube.com/embed/JLqzCxOFnN8"
          width={400}
          height={200}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className={styles.description}>
        <p>
          🌳 <strong>Entorno Natural:</strong> Desfrute da serenidade das montanhas e da
          natureza exuberante que envolve esta encantadora casa.
        </p>
        <p>
          🛍️ <strong>Localização Estratégica:</strong> Situado em uma localização privilegiada,
          este imóvel oferece fácil acesso às principais praças e ao centro com
          infraestrutura completa. A conveniência está à sua porta!
        </p>
        <p>
          💎 <strong>Estilo de Vida Excepcional:</strong> Um dos pilares do Circuito das Águas,
          também é conhecida por eventos variados e pela proximidade de cidades
          como Holambra, Monte Sião, Serra Negra e Jaguariúna.
        </p>
        <p>
          📞 <strong>Agende sua Visita:</strong> Esta é a oportunidade de transformar sonhos em
          realidade. Entre em contato para agendar uma visita.
        </p>
        <p>
          🔑 <strong>Seu Novo Capítulo Começa Aqui:</strong> Este não é apenas um imóvel; é a
          materialização de um estilo de vida. Venha fazer parte dessa história.
        </p>
      </div>

      <div className={styles.infos}>
        <div className={styles.infosIntro}>
          <h2>🏡 Características da Casa</h2>
        </div>
        <IconContext.Provider value={{ color: "43766C", size: "40px" }}>
          <ul>
            <li>
              <FaRulerHorizontal />
              <p>280 m²</p>
            </li>
            <li>
              <FaBed />
              <p>3 Quartos</p>
            </li>
            <li>
              <FaShower />
              <p>4 Banheiros</p>
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
              <p>5 Vagas</p>
            </li>
          </ul>

          <ul>
            <li>
              <FaBuilding />
              <p>Escritório</p>
            </li>
            <li>
              <IoMdFlower />
              <p>Quintal</p>
            </li>
            <li>
              <MdBalcony />
              <p>Varanda</p>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Aguas;
