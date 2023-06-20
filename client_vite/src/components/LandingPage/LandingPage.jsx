import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css?used";



export default function LandingPage() {

    return (
        <div className={style.container}>
            <div className={style.landingpage}>
                <img
                    src="https://imagenpng.com/wp-content/uploads/2016/09/Grupo-perros.png"
                    alt=""
                    />
                <h1>HENRY’s DOGS WORLD</h1>
                <NavLink to="/home">
                    <button>Start!</button>
                </NavLink>
            </div>
        </div>
    );
}
