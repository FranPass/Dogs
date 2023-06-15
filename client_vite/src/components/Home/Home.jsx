import axios from "axios";
import { useEffect, useState } from "react";
import DogsList from "../DogsList/DogsList.jsx";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.css";

export default function Home() {
    const [allDogs, setAllDogs] = useState([]);
    const [dogsByName, setDogsByName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState("");
    
    const handleChange = (event) => {
        setName(event.target.value);
    };
    
    let dogsToShow = [];
    if (dogsByName.length && name) {
        dogsToShow = dogsByName;
    } else {
        dogsToShow = allDogs;
    }

    const numOfDogs = dogsToShow.length;

    const dogsList = async () => {
        const response = await axios.get("http://localhost:3001/dogs/");
        setAllDogs(() => [...response.data]);
    };

    useEffect(() => {
        dogsList();
    }, []);


    const onSearch = async (name) => {
        if(!name) {
            console.log(alert("No hay nada escrito"));
        }
        else {
            const response = await axios.get(
                `http://localhost:3001/dogs/?name=${name}`
                );
            setDogsByName(() => [...response.data]);
        }
        };

    return (
        <div className={style.container}>
            <SearchBar className={style.searchBar}
                handleChange={handleChange}
                name={name}
                onSearch={onSearch}
            />
            <DogsList
                setAllDogs={setAllDogs}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numOfDogs={numOfDogs}
                dogsToShow={dogsToShow}
            />
        </div>
    );
}
