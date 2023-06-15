import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className={style.navBar}>
            <ul className={style.navLinks}>
                <NavLink to="/home">
                    <button >Home</button>
                </NavLink>
                <NavLink to="/about">
                    <button >About</button>
                </NavLink>
                <NavLink to="/favorites">
                    <button >Favorites</button>
                </NavLink>
                <NavLink to="/create">
                    <button >Create</button>
                </NavLink>
            </ul>
        </div>
    );
}
