import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {

    return (
        <div className={style.container}>
            <div className={style.landingpage}>
                <img
                    src="https://imagenpng.com/wp-content/uploads/2016/09/Grupo-perros.png"
                    alt="dog_group"
                    />
                <h1>ALL DOGS WORLD</h1>
                <NavLink to="/home">
                    <button>Start!</button>
                </NavLink>
            </div>
        </div>
    );
}
