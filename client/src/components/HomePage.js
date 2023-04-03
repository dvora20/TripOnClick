

import dayByday from '../Images/dayByDay.jpg';
import map from '../Images/map.jpeg';
import calender from '../Images/calender.jpg';
import React, { useState, useEffect } from "react";
// import './HomePage.css';
import axios from "axios";
import styled from "styled-components";
import Button2 from "./login/Button2";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import facebook from '../Images/facebook.png'

import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';

// import dayByday from '../Images/dayByDay.jpg';
// import map from '../Images/map.jpeg';
import "../css/HomePage.css";
import { Icon } from '@material-ui/core';
// import { da } from "date-fns/locale";
// import calender from '../Images/ calender.jpg';


function HomePage() {
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const [isLoggedIn, setIsLoggedIn] = useState("false");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [userName, setUserName] = useState(null);
  const [isUserConnect, setIsUserConnect] = useState(false);

  useEffect(() => {
      const verifyUser = async () => {
          const { data } = await axios.post(
              "http://localhost:8080/",
              {},
              {
                  withCredentials: true,
              }
          );
          if (data.status) {
              console.log(data.user.username)
              const userInsert = JSON.parse(localStorage.getItem('UserInsert'));
              if (userInsert == "null") {
                  localStorage.setItem('UserInsert', JSON.stringify("true"));
                  setUserName(data.user.username);
                  setIsUserConnect(true);
                      
              }
              setIsLoggedIn(JSON.parse(localStorage.getItem('isAuthenticated')));
          }

      };
      verifyUser();
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    const userInsert = JSON.parse(localStorage.getItem('UserInsert'));
    if (userName === null || userInsert == "null") {
        return;
    }
    console.log("popUpName = " + userName);
    toast(`היי ${userName} `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}, [userName])

const handleClick = () => {
    // window.open('https://www.facebook.com/profile.php?id=100090891827794&mibextid=ZbWKwL', "_blank");
    window.location.href =' https://www.facebook.com/profile.php?id=100090891827794&mibextid=ZbWKwL';
  }

  return (
      <HomePageContainer>

          <Header>
           

              <div class='homepage' />
              <h1 className='web'>האתר המושלם לטיול שלך</h1>
              
              {
              (isLoggedIn == "true") ?
              <Button2  class='button ' id='buttonfix' content="התחל בתכנון" type="submit" onClick={() => navigate("/Trip")}>התחל בתכנון </Button2>
              :
              <Button2  class='button' content="התחל בתכנון" type="submit" onClick={() => navigate("/login")}>התחל בתכנון</Button2>
              }
    
          </Header>


          <AboutUs>

              <Title> <h2 > מי אנחנו</h2></Title>
              <p>פלטפורמה שתעזור לכם לארגן את טיול החלומות שלכם בקליק</p>
              <p>אנו נבנה לכם לו"ז מסודר של כל הפעילויות והאטרקציות המותאמות במיוחד בשבילכם</p>
              <p>מעתה, לא צריך לדאוג ולברר מתי כל אתר פתוח </p>
              <p>אנחנו נסדר לכם את הכל לפי השעות המתאימות והעדפות שתזינו</p>
              <p>תקבלו מאיתנו את התוכנית לטיול שלכם על גבי מפה, יומן או כמסלול ש יום אחר יום </p>
              <p> !אז קדימה ארזו את המזוודות</p>
          </AboutUs>

          <Pic className='pic'>
              <img src={dayByday} alt='dayByday' className="rounded-image"></img>
        <img src={calender} alt='calender' className="rounded-image"></img>
        <img src={map} alt='map' className="rounded-image"></img>
          </Pic>




          <div className='day'>
              <Tit className='tit'>day-by-day</Tit>
              <div className='fix'>
              <p>תרשים המתאר את כל </p>
              <p>הפעילויות לכל יום עם כל</p>
              <p>הפרטים</p>
              </div>
          </div>
          <div className='cal'>
              <Tit >calender</Tit>
              <p>יומן הטיול שלכם כאן</p>
              <p>תוכלו לראות את הלוז</p>
              <p>המלא ולערוך את הטיול</p>
              <p>כמו שתרצו</p>
          </div>
          <div className='map'>
              <Tit>on the map</Tit>
              <p>תצוגה נוחה על גבי מפה</p>
              <p>בה תוכלו לראות את כל </p>
              <p>יעדי הטיול המתוכננים</p>
          </div>


          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />

<div>
{/* <a href={handleClick}><img src={facebook} className='facebook'/>:בקרו אותנו גם ב</a> */}
<p><a href="https://www.facebook.com/profile.php?id=100090891827794&mibextid=ZbWKwL" target="_blank"><img src={facebook} className='facebook'/></a>:בקרו אותנו גם ב </p>

</div>
      </HomePageContainer>

  );
}


//     //const externalImage= 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.masa.co.il%2Fwp-content%2Fuploads%2F2019%2F04%2Fnature1.jpg&imgrefurl=https%3A%2F%2Fwww.masa.co.il%2Farticle%2F%25D7%2598%25D7%2599%25D7%2595%25D7%259C%25D7%2599%25D7%259D-%25D7%2591%25D7%2598%25D7%2591%25D7%25A2-%25D7%259C%25D7%2597%25D7%2595%25D7%2595%25D7%25AA-%25D7%2590%25D7%25AA-%25D7%2594%25D7%25A2%25D7%2595%25D7%25A6%25D7%259E%25D7%2594%2F&tbnid=cGPTwDqcJJS8qM&vet=12ahUKEwi4pMectI38AhW2DRAIHQ9sB0kQMygOegUIARDcAQ..i&docid=1bJNfBB_dav8GM&w=592&h=395&q=%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20%D7%A9%D7%9C%20%D7%98%D7%99%D7%95%D7%9C%20%D7%91%D7%98%D7%91%D7%A2%20%D7%90%D7%99%D7%9B%D7%95%D7%AA%20%D7%98%D7%95%D7%91%D7%94&ved=2ahUKEwi4pMectI38AhW2DRAIHQ9sB0kQMygOegUIARDcAQ'
//   return (

//     <div className="homepage" >

//       <HederText>
//         <header>
//           <ButtonContainer>
//             <Button2 content="..." type="submit" onClick={ ()=>navigate("/Navbar")}/>    
//           </ButtonContainer>

//           <h1>האתר לטיול המושלם שלך</h1>

//         </header>
//       </HederText> 


//       <div>
//         <main>
//           <h2>מי אנחנו?</h2>
//           <p>המלל של מי אנחנו יהיה כתוב פה בעה</p>
//           <button2  content="צור טיול " type="submit" onClick={ ()=>navigate("/homepage")}>צור טיול</button2>
//         </main>
//       </div>

//       <div>
//           <footer>
//             <p>Copyright 2021 Trips Website</p>
//           </footer>
//       </div>
//     </div>
//   );


const Title = styled.h2`
margin: 1rem 0 1rem 0;
color:green ;
`;
// const Images = styled.image`

// `;
const Pic = styled.image`

float: left;
margin: 2rem;

`;
const Exp = styled.div`
padding:0;


`;
const Tit = styled.div`
font-size:2rem;


`;

const HomePageContainer = styled.div`
background-size: cover;
display: flex;
margin: auto;
text-align: center;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const CardsText = styled.div`
background-color: white;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
border-radius: 6px;
width: 300px;
margin: 20px;
padding: 20px;

&:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
`;


const Header = styled.h1`
font-size: 2em;
text-align: center;
color: #333;

`;

const AboutUs = styled.div`
width: 60%;
height: 192px;
background-color: none;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
border-radius: 5px;
margin: 20px 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
display: inline-block
top: -3rem;
  position: relative;
  font-size: 20px;
  color: #333;
  font-weight: bold;


`;

export default HomePage;