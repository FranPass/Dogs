import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage({ onClick }) {
    return (
        <div className={style.div}>
            <h1>Mundo de perros</h1>
            <NavLink to="/Home">
                <button onClick={() => {onClick()}} >
                    Home
                </button>
            </NavLink>
        </div>
    );
}
