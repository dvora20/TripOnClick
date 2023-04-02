import { useState } from "react";
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../css/NavButton.css";



 function NavButton(props) {

    // const location = useLocation();
    // const trip = location.state.data;
    // console.log(trip);
    const trip = props.trip;
    console.log("NavButton");
    console.log(trip);

    const navigate = useNavigate();

    const CalenderTrip = async (event) => {
        
        navigate('/Calender', {state: {data: trip}});
     }
     const MapTrip = async (event) => {
        
        navigate('/MapMarkers', {state: {data: trip}});
     }
     const DayByDayTrip = async (event) => {
       
        navigate('/DayByDay', {state: {data: trip}});
     }


    return(
        <div className="butt">
            <button className='button' onClick={(e) =>DayByDayTrip(e)} >יום אחר יום</button>
            <button className='button' onClick={(e) =>MapTrip(e)}>על המפה</button>
            <button className='button'onClick={(e) =>CalenderTrip(e)} >יומן</button>
        </div>
    )

}
export default NavButton;