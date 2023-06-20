import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, image, temperament, weight }) {

    return (
        <div className={style.container}>
            <div className={style.imageCard}>
                <NavLink to={id === '' ? `/create` :`/detail/${id}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>
            {id === ''  
                ? <div className={style.description}>
                    <h2>{name}</h2>
                    <p>Didn’t find the dog you were looking for?</p>
                    <p>Consider creating one yourself!!</p>
                    <NavLink to={`/create`}><h2>Click here!</h2></NavLink>
                </div>
                : <div className={style.description}>
                    <h3>{name}</h3>
                    <p>Temperaments: {temperament}</p>
                    <p>Weight: {weight} kg</p>
                </div>
                }
        </div>
    );
}
