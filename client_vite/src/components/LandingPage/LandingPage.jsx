import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
    return (
            <div className={style.landingpage}>
                <img
                    src="https://imagenpng.com/wp-content/uploads/2016/09/Grupo-perros.png"
                    alt=""
                />
                {/* <h1>HENRY’S DOGS WORLD</h1> */}
                <NavLink to="/home">
                    <button>HENRY’S DOGS WORLD</button>
                </NavLink>
            </div>
    );
}
