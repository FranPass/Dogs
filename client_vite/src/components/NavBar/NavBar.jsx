import { useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const { pathname } = useLocation();

    return (
        <div className={style.navBar}>
            <ul className={style.navLinks}>
                {['Home', 'About', 'Favorite', 'Create'].map((e,index) => {
                return (
                    <NavLink key={index} to={`/${e.toLowerCase()}`}>
                        <button className={`button ${pathname === `/${e.toLowerCase()}` ? "current" : "noCurrent"}`}>{e}</button>
                    </NavLink>
                    )
                })}
            </ul>
        </div>
    );
}


