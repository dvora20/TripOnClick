// import React from 'react';
// import GoogleFontLoader from 'react-google-font-loader';
// import '@fontsource/public-sans';
// import NoSsr from '@material-ui/core/NoSsr';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import jer from "../Images/jerusalem.jpg";
// import {
//   Info,
//   InfoCaption,
//   InfoSubtitle,
//   InfoTitle,
// } from '@mui-treasury/components/info';
// import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
// import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// import { createTheme } from '@material-ui/core/styles'
// import axios ,{all} from "axios";


// const useStyles = makeStyles(() => ({
//   card: {
//     borderRadius: '1rem',
//     boxShadow: 'none',
//     position: 'relative',
//     minWidth: 200,
//     minHeight: 360,
//     height:15,
//     width:15,
//     '&:after': {
//       content: '""',
//       display: 'block',
//       position: 'absolute',
//       width: '100%',
//       height: '64%',
//       bottom: 0,
//       zIndex: 1,
//       background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
//     },
//   },
//   content: {
//     position: 'absolute',
//     zIndex: 2,
//     bottom: 0,

//     width: '100%',
    
//   },
// }));
// // const data=[{Name:"ירושלים",img:{jer}}]

// export const GalaxyCardDemo = React.memo(function GalaxyCard(props) {
//  // console.log("insert component CARD");
//   //console.log(props.id);  
  
//   const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
//   const styles = useStyles();

//   const fetchTrip = async (event) => {
//     console.log("start")
//     //return empty
//     console.log(event.target.key);
//     //return null
//     console.log(event.target.getAttribute('key'));
//     console.log("end");
//     const {data} = await axios.get(`/trips/${event.target.id}`);
//     console.log(data);
//     console.log('works');
  
// }

//   return (
//     <>
//       <NoSsr>
//         <GoogleFontLoader
//           fonts={[
//             { font: 'Spartan', weights: [300] },
//             { font: 'Montserrat', weights: [200, 400, 700] },
//           ]}
//         />
//       </NoSsr>
     
//       <Card className={styles.card} onClick={(e) => fetchTrip(e)} id = {props.id} >
//         <CardMedia
//           classes={mediaStyles}></CardMedia>
//           <img src={props.img}
//            alt='image'/>
          
        
//         <Box py={3} px={2} className={styles.content}>
//           <Info useStyles={useGalaxyInfoStyles}>
//             <InfoSubtitle>{props.header}</InfoSubtitle>
//             <InfoTitle>{props.middel}</InfoTitle>
//             <InfoCaption>{props.footer}</InfoCaption>
//           </Info>
//         </Box>
        
//       </Card>
//     </>
//   );
// });
// export default GalaxyCardDemo









// // import React from 'react';
// // import GoogleFontLoader from 'react-google-font-loader';
// // import '@fontsource/public-sans';
// // import NoSsr from '@material-ui/core/NoSsr';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Box from '@material-ui/core/Box';
// // import Card from '@material-ui/core/Card';
// // import CardMedia from '@material-ui/core/CardMedia';
// // // import jer from "../Images/jerusalem.jpg";
// // import {
// //     Info,
// //     InfoCaption,
// //     InfoSubtitle,
// //     InfoTitle,
// // } from '@mui-treasury/components/info';
// // import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
// // import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// // import { createTheme } from '@material-ui/core/styles'
// // import axios, { all } from "axios";


// // const useStyles = makeStyles(() => ({
// //     card: {
// //         borderRadius: '1rem',
// //         boxShadow: 'none',
// //         position: 'relative',
// //         minWidth: 200,
// //         minHeight: 360,
// //         height: 15,
// //         width: 15,
// //         '&:after': {
// //             content: '""',
// //             display: 'block',
// //             position: 'absolute',
// //             width: '100%',
// //             height: '64%',
// //             bottom: 0,
// //             zIndex: 1,
// //             background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
// //         },
// //     },
// //     content: {
// //         position: 'absolute',
// //         zIndex: 2,
// //         bottom: 0,

// //         width: '100%',

// //     },
// // }));
// // // const data=[{Name:"ירושלים",img:{jer}}]

// // export const GalaxyCardDemo = React.memo(function GalaxyCard(props) {
// //     // console.log("insert component CARD");
// //     //console.log(props.id);  

// //     const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
// //     const styles = useStyles();

// //     const fetchTrip = async (event) => {
// //         const {data} = await axios.get(`/trips/${event.target.id}`);
// //         console.log(data);
// //     }

// //     return (
// //         <>
// //             <NoSsr>
// //                 <GoogleFontLoader
// //                     fonts={[
// //                         { font: 'Spartan', weights: [300] },
// //                         { font: 'Montserrat', weights: [200, 400, 700] },
// //                     ]}
// //                 />
// //             </NoSsr>

// //             <Card className={styles.card} onClick={(e) => fetchTrip(e)} id = {props.id} >
// //                 <CardMedia
// //                     classes={mediaStyles}></CardMedia>
// //                 <img src={props.img}
// //                     alt='image' />


// //                 <Box py={3} px={2} className={styles.content}>
// //                     <Info useStyles={useGalaxyInfoStyles}>
// //                         <InfoSubtitle>{props.header}</InfoSubtitle>
// //                         <InfoTitle>{props.middel}</InfoTitle>
// //                         <InfoCaption>{props.footer}</InfoCaption>
// //                     </Info>
// //                 </Box>

// //             </Card>
// //         </>
// //     );
// // });
// // export default GalaxyCardDemo
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import '@fontsource/public-sans';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Form, Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate,useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../css/Card.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TextField, IconButton } from "@material-ui/core";

//import { useNavigation } from '@react-navigation/native';



// import jer from "../Images/jerusalem.jpg";
import {
    Info,
    InfoCaption,
    InfoSubtitle,
    InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { createTheme } from '@material-ui/core/styles'
import axios, { all } from "axios";
import del from '../Images/delete.png';
import { Button, Icon } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    card: {
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        minWidth: 200,
        minHeight: 250,
        height: 15,
        width: 15,
        
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '64%',
            bottom: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
        },
    },
    content: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,

        width: '100%',

    },
}));
// const data=[{Name:"ירושלים",img:{jer}}]

export const GalaxyCardDemo = React.memo(function GalaxyCard(props) {
    // console.log("insert component CARD");
    //console.log(props.id);  

    


    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
    const styles = useStyles();
    
    const [data, setData] = useState(null);
    const [trip, setTrip] = useState(null);
    //const history = useHistory();
    const navigate = useNavigate();
   //const navigation = useNavigation();
   
    const fetchTrip = async (event) => {
        const id=event.target.id;
        console.log(id);
        console.log('fall');
        const {data} = await axios.get(`http://localhost:8080/trips/${id}`);
       // const {day}=(await axios.get(`/trips/${id}`));
        console.log(data)
        setTrip(data);
        // navigate('/DayByDay', {state: {data: data}});
       // console.log(day);
    //    setDataT(data);
    //    console.log(dataT);
    }

    // const deleteTrip =async(event)=>{
    //     const id=event.target.id;
    //     console.log(event.target);
    //     console.log(event.target.getAttribute('id'));
      
    //     const {data} = await axios.post(`http://localhost:8080/trips/delete/${id}`);
        
    //     console.log(data)
    // }
    // useEffect (()=>{
    //     if(dataT===null)
    //            return
    //     console.log(dataT)
    //     }, [dataT])

    useEffect(()=>{

    },[])
    // const handleClick = () => {
    //     
    // }
    //console.log(props);

    useEffect(()=>{
        if(trip === null){
            return;
        }
        navigate('/DayByDay', {state: {data: trip}});
    },[trip])



    return (
        <>
   
            <NoSsr>
                <GoogleFontLoader
                    fonts={[
                        { font: 'Arial, Helvetica, sans-serif', weights: [300] },
                        { font: 'Arial, Helvetica, sans-serif', weights: [200, 400, 700] },
                    ]}
                />
            </NoSsr>
          
        <div>
       
           
          <Card className={styles.card} id='back' >
            <CardMedia onClick={(e) => fetchTrip(e)} id = {props.id} classes={mediaStyles}></CardMedia>
            <div>
                  <IconButton className='buttondel'   >
                     <DeleteOutlineIcon  onClick={(e) => props.func(e)} id = {props.id} />
                  </IconButton>
                </div>
            <div>
                
                <div> 
                    <img src={props.img}
                        alt='image' /> 
                </div>
            </div>
            <div>
                <Box py={3} px={2} className={styles.content} >
                    <Info useStyles={useGalaxyInfoStyles}  >
                        <InfoSubtitle>{props.header}</InfoSubtitle>
                        <InfoTitle>{props.middel}</InfoTitle>
                        <InfoCaption>{props.footer}</InfoCaption>
                    </Info>
                </Box>
            </div>
            </Card>
         </div>
        </>
    );
});
export default GalaxyCardDemo