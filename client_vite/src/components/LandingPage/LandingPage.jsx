import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {

    return (
            <div className={style.landingpage}>
                <img
                    src="https://imagenpng.com/wp-content/uploads/2016/09/Grupo-perros.png"
                    alt=""
                />
                <NavLink to="/home">
                    <button>HENRY’S DOGS WORLD</button>
                </NavLink>
            </div>
    );
}
