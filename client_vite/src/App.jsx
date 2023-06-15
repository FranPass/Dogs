import { Routes, Route, useLocation } from "react-router-dom";
// import "./App.css";
import Home from './components/Home/Home'
import Detail from "./components/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import CreateForm from "./components/CreateForm/CreateForm"

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
                    <Route path="/home" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/create" element={<CreateForm />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
