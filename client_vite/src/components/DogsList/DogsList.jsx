import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination.jsx"
import style from "./DogsList.module.css";

export default function Cards() {

    const [dogs, setDogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;
    const numOfDogs = dogs.length

    const dogsList = async() => {
        const response = await axios.get("http://localhost:3001/dogs/");
        setDogs(() => [...response.data]);
    }

    useEffect(() => {
        dogsList()
    }, [])

    const lastDog = currentPage * dogsPerPage;
    const firstDog = lastDog - dogsPerPage;

    return (
        <>
        <div className={style.divCards}>
            {dogs.slice(firstDog, lastDog).map(({ id, name, image, temperaments, weight }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        temperaments={temperaments}
                        weight={weight}
                    />
                );
            })}
        </div>
        <Pagination 
            dogsPerPage={dogsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numOfDogs={numOfDogs}
        />
        </>
    );
}