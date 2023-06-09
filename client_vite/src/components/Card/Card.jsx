/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({id, name, image, temperaments, weight}) {
  
    return (
      <article className={style.container}>
        <div>
          <Link to={`/Detail/${id}`}>
            <p className={style.nombre}>{name}</p>
          </Link>
        </div>
        <img className={style.imageCard} src={image} alt="" />
        <div className={style.descripcion}>
          <p>Nombre: {name}</p>
          <p>Temperamentos: {temperaments}</p>
          <p>Peso: {weight}</p>
        </div>
      </article>
    );
  }