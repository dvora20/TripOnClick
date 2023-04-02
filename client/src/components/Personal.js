// import React from 'react';
// import styled from "styled-components";
// import Card from './Card';
// import Car from './Car';
// import "../css/Personal.css";
// import jerusalem from '../Images/jerusalem.jpg';
// import plus from '../Images/plus.png'
// import axios ,{all} from "axios";
// import react ,{ useState, useEffect } from 'react';
// import Item from '@mui-treasury/components/flex/Item';
// import Button from './login/Button';

// function Personal() {

//   // axios.get(`/user/${`6390f74c8ac1f269170ba2c3`}`)
//   // .then(response => {
//   //    trip = response.data;
//   //    console.log(trip[0].Name);
//   //    console.log(trip);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });
//   let trip;
//  // const navigate = navigate();
//  const [Allusers, setAllusers] = useState([]);
//  const [Alltrips, setAlltrips] = useState([]);
//  let i=0;
//  let j=0;
//  let k=0;
//  let t=0;
// let id_='';
// const [AllusersTrips, setAllusersTrips] = useState([]);
// //   useEffect(() => {
// //     async function fetchData() {
// //       const response = await axios.get("http://localhost:8080/Users/");
// //       const response2 = await axios.get("http://localhost:8080/Trips/");
// //       setAllusers(response.data);
// //       setAlltrips(response2.data);
// //     }
// //     fetchData();
// //   }, []);
// //   console.log(Allusers.length);
// //   const f=async ()=>{
// //   for(i=0;i<Allusers.length;i++)
// //   {
// //     if(Allusers[i]._id==='6390f74c8ac1f269170ba2c3')
// //     {
// //       for(j=0;j<Allusers[i].trips.length;j++)
// //       {
// //         userTrips.push(Allusers[i].trips[j]);
// //         console.log('hi');
// //       }

// //     }
// //   }
// //   console.log(userTrips.length);


// //   for(k=0;k<userTrips.length;k++)
// //   {
// //        for(t=0;t<Alltrips.length;t++)
// //        {
// //           if(userTrips[k]===Alltrips[t]._id)
// //           {
// //                AllusersTrips.push(Alltrips[t]);
// //                console.log(Alltrips[t].Name);


// //           }

// //        }
// //   }
// //   console.log(AllusersTrips);

// //  }
// // f();
// //   console.log('done');

// // //   const fetchTrip = async (e) => {
// // //     console.log('khbej');
// // //     console.log(e);
// // //    // const response = await axios.get(`/trips/${`6390f74c8ac1f269170ba2c3`}`);


// // // }

// // const idT=null;
// const [userTrips, setUserTrips] = useState([]);
//     useEffect(() => {
//         async function fetchData() {
//             const {data} = await axios.get("http://localhost:8080/Users/6390f74c8ac1f269170ba2c3/trips");
//             setUserTrips(data);
//             console.log(data);
//         }
//         fetchData();
//     }, []);
//   return (
//   <div>
//     <h3 className='per'>איזור אישי</h3>
//     <div class='allCard'>
//       <img src={plus} alt='plus' className="plus-image"></img>
//       <div   className='first'  >
//          {
//         //  console.log("print ids trips");
//          userTrips.map((Item)=>{
//           console.log(Item._id); 

//            return(
//            <Card  id={Item._id}  header={Item.Name} img={jerusalem} footer="234b" className='card'   ></Card>
//          );}
//          )};




//       </div>
//     </div>
//   </div>



//   );


// }

// const per = styled.h3`
// margin: 1rem 0 1rem 0;
// color:green ;
// `;


// export default Personal;

// // import React from 'react';
// // import jerusalem from '../Images/jerusalem.jpg';
// // import styled from "styled-components";
// // import Card from './Card';
// // // import Car from './Car';
// // import "../css/Personal.css";
// // // import plus from '../Images/plus.png'
// // import axios, { all } from "axios";
// // import react, { useState, useEffect } from 'react';
// // import Item from '@mui-treasury/components/flex/Item';
// // import Button from './login/Button';

// // function Personal() {
// //     const [userTrips, setUserTrips] = useState([]);
// //     useEffect(() => {
// //         async function fetchData() {
// //             const {data} = await axios.get("http://localhost:8080/Users/6390f74c8ac1f269170ba2c3/trips");
// //             setUserTrips(data);
// //         }
// //         fetchData();
// //     }, []);

// //     return (
// //         <div>
// //             <h3 className='per'>איזור אישי</h3>
// //             <div class='allCard'>
// //                 {/* <img src={plus} alt='plus' className="plus-image"></img> */}
// //                 <div className='first'  >
// //                     {
// //                         //  console.log("print ids trips");
// //                         userTrips.map((Item) => {
// //                             console.log(Item._id);

// //                             return (
// //                                 <Card id={Item._id} header={Item.Name} img={jerusalem} footer="234b" className='card'   ></Card>
// //                             );
// //                         }
// //                         )};
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // const per = styled.h3`
// // margin: 1rem 0 1rem 0;
// // color:green ;
// // `;



// // export default Personal;

import React from 'react';
import styled from "styled-components";
import CardT from './Card';
// import Car from './Car';
import "../css/Personal.css";
import jerusalem from '../Images/jerusalem.jpg';
// import plus from '../Images/plus.png'
import axios, { all } from "axios";
import react, { useState, useEffect } from 'react';
import Item from '@mui-treasury/components/flex/Item';
import Button from './login/Button';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";

function Personal() {
    const [userTrips, setUserTrips] = useState([]);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserConnected() {
            let { data } = await axios.post(
                "http://localhost:8080/",
                {},
                {
                    withCredentials: true,
                }
            );
            console.log(data.user._id);
            setUserId(data.user._id);
        }
        getUserConnected();
    }, []);

    useEffect(() => {
        async function getUserTrips() {
            if (userId === null)
                return;
            const { data } = await axios.get(`http://localhost:8080/users/${userId}/trips`);
            setUserTrips(data);
            console.log(data);
        }
        getUserTrips()
    }, [userId]);


//Date function
const [date, setDate] = useState();
const deleteTrip =async(event)=>{
    const id=event.target.id;
    console.log(event.target);
    console.log(event.target.getAttribute('id'));
  
    const {data} = await axios.post(`http://localhost:8080/trips/delete/${id}/${userId}`);
    const newData = userTrips.filter(item => item._id !== id);
        setUserTrips(newData);
    console.log(data)
}

    return (
        <div >
             
            <h3 className='per'>איזור אישי</h3>
            <div className='but'>
            <Button   content="יצירת טיול" type="submit" onClick={() => navigate("/Trip")}>יצירת טיול</Button>
            </div>
            <div class='allCard'>
                {/* <img src={plus} alt='plus' className="plus-image"></img> */}
                {/* <div className='first'  > */}
                    {

                        userTrips.map((Item) => {
                            const d = Item.StartDate;
                            let text = d.toString();
                            console.log(text);    
                            const [year, month, day] = text.substring(0, 10).split('-');
                            console.log(`${day}/${month}`)
                               // console.log("print ids trips");
                                console.log(Item._id);
                                // setDate(Item.StartDate);
                                // console.log(date);
                                // const day = Item.setDate.getDate();
                                // console.log(day);
                                // const month = Item.setDate.getMonth() + 1; // January is 0
                                // console.log(month);
                                // const year = Item.setDate.getFullYear();
                                // console.log(year);
                                // class="col-lg-3 mb-6 "
                            return (
                                // <div class="container row">
                                    <div  id='item ' class="col-lg-3 mb-4 ">
                                         {/* <button class='buttondel'  onClick={(e) => deleteTrip(e)} id = {Item._id}></button> */}
                                          <CardT func={deleteTrip} id={Item._id} header={`${day}/${month}`} middel={Item.Name} img={Item.Image}  className='card' style={{  display:'inline-block' }}  ></CardT>
                                    </div>
                                    // </div> 
                           
                          
                           
                            )
                        }
                        )}
                </div>
            </div>
        // </div>
    );
}

const per = styled.h3`
margin: 1rem 0 1rem 0;
color:green ;
`;


export default Personal;