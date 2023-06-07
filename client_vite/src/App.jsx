import {Routes, Route, useLocation} from 'react-router-dom';
import './App.css'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'


function App() {
  const {pathname} = useLocation();

  return (
    <>
      {pathname !== '/' ? <NavBar /> : ''}
      
      <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Cards/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
