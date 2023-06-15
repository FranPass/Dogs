import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
    const { id } = useParams();
    const [dog, setDog] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
            if (data.name) {
                setDog(data);
            } else {
                window.alert(data.error.message);
            }
        });
        return setDog({});
    }, [id]);

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={dog.image} alt="" />
            </div>
            <div className={style.description}>
                <h2>Name: {dog.name}</h2>
                <p>Height: {dog.height} cm</p>
                <p>Weight: {dog.weight} kg</p>
                <p>Temperaments: {dog.temperaments}</p>
                <p>Life span: {dog.life_span}</p>
            </div>
        </div>
    );
}
