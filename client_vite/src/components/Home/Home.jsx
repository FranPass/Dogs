import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setAllDogs } from "../../redux/actions.js";
import DogsList from "../DogsList/DogsList.jsx";
import style from "./Home.module.css";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAllDogs());
    }, [dispatch])
    
    return (
        <div className={style.container}>
            <DogsList
            />
        </div>
    );
}
