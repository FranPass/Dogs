
import { NavLink } from "react-router-dom";

export default function LandingPage () {
    return (
        <div>
            <h1>Funciona</h1>
            <NavLink to="/Home">
                <button >Home</button>
            </NavLink>
        </div>
    )
}