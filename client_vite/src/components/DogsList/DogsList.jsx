import {useSelector} from 'react-redux'
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination.jsx";
import style from "./DogsList.module.css";

export default function DogsList() {
    const filteredDogs = useSelector((state) => state.filteredDogs)
    const currentPage = useSelector((state) => state.currentPage)    

    const dogsPerPage = 8;
    const numOfDogs = filteredDogs.length
    const lastDog = currentPage * dogsPerPage;
    const firstDog = lastDog - dogsPerPage;

    return (
        <div className={style.container}>
            <div className={style.divCards}>
                {filteredDogs
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
                numOfDogs={numOfDogs}
            />
        </div>
    );
}