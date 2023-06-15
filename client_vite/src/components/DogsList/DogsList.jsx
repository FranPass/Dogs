// import axios from "axios";
// import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination.jsx";
// import SearchBar from "../SearchBar/SearchBar";
import style from "./DogsList.module.css";

export default function DogsList({currentPage, setCurrentPage, numOfDogs, dogsToShow}) {
    const dogsPerPage = 8;

    const lastDog = currentPage * dogsPerPage;
    const firstDog = lastDog - dogsPerPage;

    return (
        <>
            <div className={style.divCards}>
                {dogsToShow
                    .slice(firstDog, lastDog)
                    .map(({ id, name, image, temperament, weight }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                temperament={temperament}
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
