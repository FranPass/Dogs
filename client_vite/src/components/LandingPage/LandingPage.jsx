import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {

    return (
        <div className={style.container}>
            <div className={style.landingpage}>
                <h1>All Dogs World</h1>
                <img
                    src="https://imagenpng.com/wp-content/uploads/2016/09/Grupo-perros.png"
                    alt=""
                />
                <NavLink to="/home">
                    <h2>Start!</h2>
                </NavLink>
            </div>
        </div>
    );
}
