import style from "./SearchBar.module.css";

export default function SearchBar({handleChange, name, onSearch}) {
    return (
        <div className={style.search}>
            <input
                type="search"
                value={name}
                onChange={handleChange}
                placeholder="Search dog..."
                className={style.searchBar}
            />
            <button onClick={ () => {onSearch(name)} } className={style.searchBtn} disabled={!name} >
                Search
            </button>
        </div>
    );
}
