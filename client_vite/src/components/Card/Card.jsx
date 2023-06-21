import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, image, temperament, weight }) {
    return (
        <div className={style.container}>
            <div className={style.imageCard}>
                <NavLink to={id === "" ? `/create` : `/detail/${id}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>
            {id === "" ? (
                <div className={style.description}>
                    <span className={style.title}>
                        {name}
                    </span>
                    <p>Didn’t find the dog you were looking for?</p>
                    <p>Consider creating one yourself!!</p>
                    <NavLink to={`/create`}>
                        <h2>Click here!</h2>
                    </NavLink>
                </div>
            ) : (
                <div className={style.description}>
                    <div className={style.title}>
                        <span>{name}</span>
                    </div>
                    <div className={style.data}>
                        <p>{temperament}</p>
                        <p>Weight: {weight} kg</p>
                    </div>
                </div>
            )}
        </div>
    );
}
