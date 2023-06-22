import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { findDogs } from "../../redux/search_actions";
import { useEffect, useState } from "react";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        dispatch(findDogs(name))
    }, [name, dispatch])
    return (
        <div className={style.search}>
            <input
                type="search"
                value={name}
                onChange={handleChange}
                placeholder="Search dog..."
                className={style.searchBar}
            />
        </div>
    );
}
