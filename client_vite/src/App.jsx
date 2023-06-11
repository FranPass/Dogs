import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import DogsList from "./components/DogsList/DogsList.jsx"
import Detail from "./components/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

function App() {
    const { pathname } = useLocation();

    return (
        <>
            {pathname !== "/" ? <NavBar /> : ""}

            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage />}
                    />
                    <Route path="/home" element={<DogsList />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
