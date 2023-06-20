import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, image, temperament, weight }) {

    return (
        <div className={style.container}>
            <div className={style.imageCard}>
                <NavLink to={`/Detail/${id}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>
            <div className={style.description}>
                <h3>{name}</h3>
                <p>Temperaments: {temperament}</p>
                <p>Weight: {weight} kg</p>
            </div>
        </div>
    );
}
