import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector} from 'react-redux'
import style from "./Detail.module.css";

export default function Detail() {
    const allDogs = useSelector((state) => state.allDogs)
    const { id } = useParams();
    const [dog, setDog] = useState({});

    const findDogDetails = (id) => {
        const dogDetails = allDogs.find( dog => `${dog.id}` === id)
        setDog(dogDetails)
    }

    useEffect(() => {
        findDogDetails(id);
        return () => {setDog({})};
      }, [id]);

    return (
        <div className={style.detailContainer}>
            <div className={style.cardContainer}>
                <div className={style.image}>
                    <img src={dog.image} alt="" />
                    <span className={style.id}>
                        ID: {dog.id}
                    </span>
                </div>
                <div className={style.description}>
                    <h2>Name: {dog.name}</h2>
                    <p>Height: {dog.height} cm</p>
                    <p>Weight: {dog.weight} kg</p>
                    <p>Temperaments: {dog.temperament}</p>
                    <p>Life span: {dog.life_span}</p>
                </div>
            </div>
            <NavLink to={"/home"}>
                <button>Go back</button>
            </NavLink>
        </div>
    );
}
