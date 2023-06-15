import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={style.div}>
            <h1>Henry’s Dogs</h1>
            <NavLink to="/Home">
                <button>
                    Start
                </button>
            </NavLink>
        </div>
    );
}
