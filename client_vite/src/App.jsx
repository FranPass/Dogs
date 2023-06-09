import axios from "axios";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

function App() {
  const { pathname } = useLocation();
  const [dogs, setDogs] = useState([]);
  
  async function onClick() {
      try {
        const response = await axios.get('http://localhost:3001/dogs/')
        console.log(response.data)
        return setDogs(() => [...response.data])
      } catch (error) {
        return 'Error'
      }
    }
    
    
    return (
        <>
            {pathname !== "/" ? <NavBar /> : ""}

            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage onClick={onClick}/>} />
                    <Route path="/home" element={<Cards dogs={dogs} />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </div>
        </>
    );
}


export default App;

