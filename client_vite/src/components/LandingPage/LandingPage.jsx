import { NavLink } from "react-router-dom";
import './LandingPage.module.css'

export default function LandingPage () {

    return (
        <div>
            <h1>It’s alive!</h1>
            <NavLink to="/Home">
                <button >Home</button>
            </NavLink>
        </div>
    )
}