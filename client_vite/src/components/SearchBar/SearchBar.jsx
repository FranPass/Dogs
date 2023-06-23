import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { findDogs } from "../../redux/search_actions";
import { useState } from "react";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const onClick = () => {
        dispatch(findDogs(name))
    }
  
    return (
        <div className={style.search}>
            <input
                type="search"
                value={name}
                onChange={handleChange}
                placeholder="Search dog..."
                className={style.searchBar}
            />
            <button onClick={onClick}>{name ? 'Search' : 'Reset'}</button>
        </div>
    );
}
