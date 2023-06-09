import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { Routes, Route, useLocation } from "react-router-dom";
import DogsList from './components/DogsList/DogsList'
import Detail from "./components/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import CreateForm from "./components/CreateForm/CreateForm"
import { setAllDogs, setAllTemperaments } from "./redux/search_actions";

import axios from "axios";
axios.defaults.baseURL = 'https://apidogs-production-0756.up.railway.app/' 
// axios.defaults.baseURL = 'http://localhost:3001/' 

function App() {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAllDogs());
        dispatch(setAllTemperaments());
    }, [dispatch])

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
                    <Route path="/create" element={<CreateForm />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
