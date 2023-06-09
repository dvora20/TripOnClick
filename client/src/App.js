import './App.css';
import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Login from './components/Login';
import Secret from './components/Secret';
import HomePage from './components/HomePage';
import Personal from './components/Personal';
import DayByDay from './components/DayByDay';
import Map from './components/Map';
import MapMarkers from './components/MapMarkers';
import Navbar from './components/Navbar';
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import FilterComp2 from './components/Trip';
import Calender from './components/CalenderParent';
import "./index.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";




function App() {

  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes  >
     
        <Route ></Route>
        <Route path='/Login' element={<Login />} />
        {/* <Route path='/HomePage' element={<HomePage />} /> */}
        <Route path='/Register' element={<Register />} />
        <Route path='/Personal' element={<Personal />} />
        <Route path='/DayByDay' element={<DayByDay />} />
        <Route path='/Calender' element={<Calender />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/MapMarkers' element={<MapMarkers />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path="/passwordreset/:id/:token" element={<PasswordReset />} />
        <Route path='/trip' element={<FilterComp2 />} />
        
      
        <Route path='/' element={<HomePage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
