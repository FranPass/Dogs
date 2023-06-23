import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";

export default function Detail() {
    const { id } = useParams();
    const [dog, setDog] = useState({});

    const findDogDetails = async (id) => {
        try {
            const {data} = await axios.get(`/dogs/${id}`)
            setDog(data);
        } catch (error) { 
            console.log(error);
            setDog({...error.response.data, error: error.message})
            console.log(dog.error);
        }
    };

    useEffect(() => {
        findDogDetails(id);
        return () => {
            setDog({});
        };
    }, [id]);

    return (
        <div className={style.detailContainer}>
            {dog.error ? (
                <div className={style.cardContainer}>
                    <div className={style.image}>
                        <img src={dog.image} alt="" />
                    </div>
                    <div className={style.description}>
                        <h2>{dog.title}</h2>
                        <p>{dog.error}</p>
                        <p>Looks like there is a missing dog...</p>
                        <NavLink to={`/create`}>
                            <button>Create one!</button>
                        </NavLink>
                    </div>
                </div>
            ) : (
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
                        <p>Temperaments: {dog.temperaments}</p>
                        <p>Life span: {dog.life_span}</p>
                    </div>
                </div>
            )}
            <NavLink to={"/home"}>
                <button>Go back</button>
            </NavLink>
        </div>
    );
}
