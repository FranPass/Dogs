// import axios from "axios";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setAllDogs } from "../../redux/actions.js";
import DogsList from "../DogsList/DogsList.jsx";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.css";
import Filters from "../Filters/Filters.jsx";

export default function Home() {
    const dispatch = useDispatch();
    // const [allDogs, setAllDogs] = useState([]);
    // const [dogsByName, setDogsByName] = useState([]);
    // const [name, setName] = useState("");
    
    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };
    
    // let dogsToShow = [];
    // if (dogsByName.length && name) {
    //     dogsToShow = dogsByName;
    // } else {
    //     dogsToShow = allDogs;
    // }

    // const numOfDogs = dogsToShow.length;

    // const dogsList = async () => {
    //     const {data} = await axios.get("http://localhost:3001/dogs/");
    //     setAllDogs(() => [...data]);
    // };

    // useEffect(() => {
    //     dogsList();
    // }, []);
    
    // const onSearch = async (name) => {
        //     const {data} = await axios.get(
            //         `http://localhost:3001/dogs/?name=${name}`
            //     );
            //     setDogsByName(() => [...data]);
            //     };
    useEffect(() => {
        dispatch(setAllDogs());
    }, [dispatch])
    
    return (
        <div className={style.container}>
            <Filters/>
            <SearchBar className={style.searchBar}
                // handleChange={handleChange}
                // name={name}
                // onSearch={onSearch}
            />
            <DogsList
            />
        </div>
    );
}
