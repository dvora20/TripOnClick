import CardDay from './CardDay';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import "../css/DayByDay.css";
import react, { useState, useEffect, useRef } from 'react';
import axios, { all } from "axios";
import Button2 from './login/Button2';
import Timeline from './TimeLine';
import { useNavigate } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import { useLocation } from 'react-router-dom';
import car from '../Images/car.png';
import '../css/TimeLine.css';
import NavButton from './NavButton';
import Navbar from './Navbar';
import bed from '../Images/bed.png'
import timeout from '../Images/time.png'
import caldbd from '../Images/caldbd.jpg';
import { Button, Space } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { ToastContainer, toast } from 'react-toastify';
import { HourglassBottom } from '@mui/icons-material';
// import CardDay from './cardCheck';

function DayByDay() {
   const location = useLocation();
   const trip = location.state.data;
   console.log(trip);
   const myRef = useRef(null);

   const chackTrip = {
      "_id": "64165270c25bcf5d36e51742",
      "StartDate": "2023-02-01T22:00:00.000Z",
      "FinalDate": "2023-02-05T22:00:00.000Z",
      "Attractions": [
         {
            "AttractionDetails": {
               "_id": "63ab5a3ec9168fcf012b878f"
            },
            "Break": null,
            "Start": "2023-02-01T09:00:00.000Z",
            "TravelTimeFromPrev": 0,
            "DistanceFromPrev": 0,
            "_id": "6418a57697d29ed511a51c61"
         },
         {
            "AttractionDetails": {
               "_id": "63ab5a3ec9168fcf012b8793"
            },
            "Break": null,
            "Start": "2023-02-01T13:11:00.000Z",
            "TravelTimeFromPrev": 0,
            "DistanceFromPrev": 0,
            "_id": "6418a57697d29ed511a51c62"
         },
         {
            "AttractionDetails": {
               "Address": {
                  "Street": "החורש",
                  "Number": 1,
                  "City": "ראש פינה"
               },
               "price": [],
               "_id": "63ab5a3ec9168fcf012b8792",
               "Name": "עוזיאל טיולי ג'יפים",
               "Area": "צפון",
               "Category": "אקסטרים",
               "Destipopulation": 3,
               "Image": "https://www.tiuli.com/image/1c9fede6f3dac8196306039a4f305d81.jpg?&width=830&height=470",
               "HoursNum": 2,
               "OpeningHours": "07:00",
               "ClosingHours": "21:00",
               "Price": [
                  150,
                  130
               ],
               "Description": "בזריחות, בשקיעות, במעיינות ובכל מקום אחר בו אפשר לצבור חוויות מדהימות. יואב ונגה עוזיאל טיולי ג'יפים מציעים מגוון רחב של מסלולים קצרים או ארוכים לפי הצורך, טיולי זריחה ושקיעה, טיולים רומנטיים לקבוצת זוגות וטיולים מותאמים למשפחות",
               "Url": "https://www.tiuli.com/attractions/1998/%D7%99%D7%95%D7%90%D7%91-%D7%95%D7%A0%D7%92%D7%94-%D7%A2%D7%95%D7%96%D7%99%D7%90%D7%9C-%D7%98%D7%99%D7%95%D7%9C%D7%99-%D7%92-%D7%99%D7%A4%D7%99%D7%9D",
               "__v": 0
            },
            "Break": null,
            "Start": "2023-02-01T16:15:00.000Z",
            "TravelTimeFromPrev": 6037,
            "DistanceFromPrev": 150216,
            "_id": "6418a57697d29ed511a51c63"
         },
         {
            "AttractionDetails": {
               "_id": "63ab5a3ec9168fcf012b879a"
            },
            "Break": null,
            "Start": "2023-02-02T18:00:00.000Z",
            "TravelTimeFromPrev": 6037,
            "DistanceFromPrev": 150216,
            "_id": "6418a57697d29ed511a51c64"
         }
      ],
      "AttractionsNotUsed": [
         {
            "_id": "63ab5a3ec9168fcf012b87a4"
         },
         {
            "_id": "63ab5a3ec9168fcf012b87a7"
         }
      ],
      "Name": "טיול שיראל ניסוי",
      "__v": 0
   }
   const checkallattraction = chackTrip.Attractions;
   console.log(checkallattraction);

   const generateError = (error) =>
      toast.error(error, {
         position: "top-left",
      });


   const navigate = useNavigate();
   console.log("DAY----BY----DAY")
   console.log(trip);
   console.log(trip._id);
   console.log(trip.AttractionsNotUsed);

   const StartDate = trip.StartDate
   const FinalDate = trip.FinalDate
   console.log(StartDate);
   console.log(FinalDate)


   var getDaysArray = function (start, end) {
      for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
         arr.push(new Date(dt));
      }

      return arr;
   };



   var days = []
   days = getDaysArray(new Date(StartDate), new Date(FinalDate));
   days.map((v) => v.toUTCString().slice(0, 10)).join("")
   var lenDays = days.length

   console.log(days)

   const allAttractions = trip.Attractions;
   console.log(allAttractions);

   const CalenderTrip = async (event) => {

      navigate('/Calender', { state: { data: trip } });
   }
   const MapTrip = async (event) => {

      navigate('/MapMarkers', { state: { data: trip } });
   }
   const DayByDayTrip = async (event) => {

      navigate('/DayByDay', { state: { data: trip } });
   }
   const scrollToRef = useRef(null);

   const firstEventForDate = (events, date) => {
      const dateString = new Date(date).toISOString().substring(0, 10);
      const firstEvent = events.find((event) => new Date(event.Start) >= new Date(dateString));
      return firstEvent || null;
   };


   const handleClick = (e, id) => {
      const date = e.target.innerText;
      const dayAndMonthAndYear = date.split("/");
      const day = dayAndMonthAndYear[0];
      const month = dayAndMonthAndYear[1];
      const year = dayAndMonthAndYear[2];
      const attractionsInDate = allAttractions.filter(attraction => (
         new Date(attraction.Start).getMonth() + 1) == month &&
         new Date(attraction.Start).getDate() == day &&
         new Date(attraction.Start).getFullYear() == year);
      if (attractionsInDate.length === 0) {
         generateError("לא קיימות אטרקציות ביום זה")
         return;
      }
      const element = document.getElementById(`object-${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
   }

   let first = []


   return (
      <div >
         <div>
            <NavButton trip={trip} />
         </div>
         <div style={{ display: 'flex' }}>
            <div className="DayByDay-dates-div">
               {days.map((date) => {
                  const eventId = firstEventForDate(allAttractions, date)?._id;
                  first.push(eventId)

                  if (!eventId) return null;

                  return (

                     <div key={eventId} style={{}}>
                        <span onClick={(e) => handleClick(e, eventId)}>
                           <Button className="dates-dayByDay" >
                              {date.getDate() + "/" + ((date.getMonth()) + 1) + "/" + (date.getFullYear())}
                              <CalendarOutlined style={{ fontSize: '20px' }} />
                           </Button>
                        </span>
                     </div>
                  );
               })}

            </div>
            <div className='pagefix'>


               <div className='cardsmap'>
                  {
                     allAttractions.map((item, index) => {
                        // const d = item.Start;
                        const d = new Date();
                        d.setTime(new Date(item.Start).getTime());
                        console.log(d);
                        let text = d.toString();
                        console.log(text);
                        // const [year, month, day] = text.substring(0, 10).split('-');
                        const daymonth = d.getDate() + "/" + ((d.getMonth()) + 1);
                        // const month=d.getMonth();
                        console.log(daymonth)
                        // console.log(month)
                        // console.log(`${day}/${month}`)


                        const startObj = new Date(item.Start);
                        startObj.setHours(startObj.getHours() - 2)

                        let endObj = new Date(item.Start);
                        let hoursDuration;
                        if (item.AttractionDetails) {
                           hoursDuration = item.AttractionDetails.HoursNum
                        }
                        else {
                           hoursDuration = item.Break.HoursNum;
                        }
                        endObj.setHours(endObj.getHours() + hoursDuration - 2)

                        const startHour = startObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        const endHour = endObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                        const travelTime = (item.TravelTimeFromPrev / 60);
                        let roundedNumber = Math.round(travelTime);


                        return (

                           (item.AttractionDetails === null) ?
                              <div>
                                 {/* {
                                    console.log('allattraction ===null')
                                 }
                                 <CardDay
                                    //   id={item.AttractionDetails}
                                    header={'הפסקה'}
                                    className='cards'>
                                 </CardDay> */}

                              </div>
                              :
                              <div>
                                 {first.includes(item._id) ? <img src={bed} class="bed"></img>
                                    : console.log("no first")}
                                 <div key={item._id} id={`object-${item._id}`} ref={scrollToRef} >
                                 </div>
                                 <div className="timeline-container">
                                    <div className="timeline">
                                       <img src={car} alt='car' className='car'></img>

                                       {/* <div class="travelTime"> {'דקות'+' '+roundedNumber} <a href="https://www.flaticon.com/free-icons/clock" title="clock icons"></a></div> */}
                                       <div className='nextToEachOther'>
                                          <img src={timeout} className='time'></img>
                                          <div class="travelTime">{" " + roundedNumber + " "} <p className='min'> דקות </p></div>


                                       </div>

                                       <div>

                                          {allAttractions[index - 1] && allAttractions[index - 1].AttractionDetails == null && <>
                                             <span className=''> הפסקה<span>{" " + Math.round(allAttractions[index - 1].Break.HoursNum * 60) + " "} </span> דקות </span>
                                             <span style={{ color: 'white' }}></span>
                                             <HourglassBottom fontSize='large' />
                                             
                                             <br />
                                          </>}

                                          {item.AttractionDetails &&
                                             <CardDay
                                                className='cards'
                                                // id={item.AttractionDetails}
                                                header={item.AttractionDetails.Name}
                                                body={item.AttractionDetails.Description}
                                                // Address={`${day}/${month}` + ' ' + startHour + '-' + endHour}
                                                Address={daymonth + ' ' + startHour + '-' + endHour}
                                                Url={item.AttractionDetails.Url}
                                                Image={item.AttractionDetails.Image}
                                             ></CardDay>}


                                          {/* {
                                  (item.Break)&&
                                  <CardDay
                                  //   id={item.AttractionDetails}
                                  header={'הפסקה'}
                                  className='cards'>
                                  
                                  </CardDay>
                                } */}
                                       </div>
                                       <div>

                                          {
                                             //  (item.Break)&&
                                             //  <CardDay
                                             //  //   id={item.AttractionDetails}
                                             //  header={'הפסקה'}
                                             //  className='cards'>

                                             //  </CardDay>
                                          }
                                       </div>


                                       {/* <div> */}

                                       {/* {
                                
                                     ( item.AttractionDetails!==null) ?
                                     (<div>
                                       <CardDay  
                                       className='cards'
                                       // id={item.AttractionDetails}
                                       header={item.AttractionDetails.Name}
                                       body={item.AttractionDetails.Description}
                                       // Address={`${day}/${month}` + ' ' + startHour + '-' + endHour}
                                       Address={daymonth + ' ' + startHour + '-' + endHour}
                                       Url={item.AttractionDetails.Url}
                                       Image={item.AttractionDetails.Image}
                                       ></CardDay>
                                     </div>)
                                     :
                                     (
                                     <div>
                                       <CardDay
                                     //   id={item.AttractionDetails}
                                      header={'הפסקה'}
                                      className='cards'>
                                    
                                     </CardDay>
                                     </div>)
                                 } */}


                                       {/* {
                                    checkallattraction.map((item) => {
                                     (item.Break===null) ?
                                     
                                    console.log('break'):
                                       <CardDay

                                       id={checkallattraction.AttractionDetails}
                                       // header={checkallattraction.AttractionDetails.Name}
                                       // body={checkallattraction.AttractionDetails.Description}
                                       // Address={`${day}/${month}` + ' ' + startHour + '-' + endHour}
                                       // Url={checkallattraction.AttractionDetails.Url}
                                       // Image={checkallattraction.AttractionDetails.Image}

                                       className='cards'>
                                    </CardDay>
                                    })
                                    } */}

                                       {/* </div> */}

                                    </div>
                                 </div>

                              </div>


                        );

                     }

                     )}
               </div>


               <div>
               </div>
            </div>
         </div>

         <ToastContainer rtl={true} />
      </div>


   );
}



export default DayByDay;