import { useState, useEffect } from "react";
import Image from "next/image";
import { IconContext } from "react-icons";
import {
  FaBed,
  FaShower,
  FaBuilding,
  FaRulerHorizontal,
  FaMountain,
  FaMapMarkerAlt,
  FaCar,
  FaSwimmer,
} from "react-icons/fa";
import { MdPets, MdBalcony } from "react-icons/md";
import { IoMdFlower } from "react-icons/io";
import styles from "../../styles/Imovel.module.scss";

const Aguas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Bem-vindo ao seu novo lar em </h3>
        <h3>Águas de Lindóia! 🌄</h3>
      </div>

      <div className={styles.video}>
        <iframe
          title="Apartamento em Águas de Lindóia"
          src="https://www.youtube.com/embed/JLqzCxOFnN8"
          width="100%"
          height={200}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p>🏡 **Características da Casa:**</p>
      <p>Bairro Jardim Maciel</p>

      <div className={styles.infos}>
        <IconContext.Provider value={{ color: "43766C", size: "25px" }}>
          <ul>
            <li>
              <FaRulerHorizontal />
              {/* <p>139 m²</p> */}
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
      <div className={styles.price}>
        <p>R$ 360.000</p>
      </div>
    </div>
  );
};

export default Aguas;
