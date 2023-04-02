// import React from 'react';
// import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
// import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
// import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

// const useStyles = makeStyles(({ breakpoints, spacing }) => ({
//   root: {
//     margin: 'auto',
//     borderRadius: spacing(2), // 16px
//     transition: '0.3s',
//     boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//     position: 'relative',
//     maxWidth: 500,
//     marginLeft: 'auto',
//     overflow: 'initial',
//     background: '#ffffff',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingBottom: spacing(2),
//     [breakpoints.up('md')]: {
//       flexDirection: 'row',
//       paddingTop: spacing(2),
//     },
//   },
//   media: {
//     width: '88%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginTop: spacing(-3),
//     height: 0,
//     paddingBottom: '48%',
//     borderRadius: spacing(2),
//     backgroundColor: '#fff',
//     position: 'relative',
//     [breakpoints.up('md')]: {
//       width: '100%',
//       marginLeft: spacing(-3),
//       marginTop: 0,
//       transform: 'translateX(-8px)',
//     },
//     '&:after': {
//       content: '" "',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
//       borderRadius: spacing(2), // 16
//       opacity: 0.5,
//     },
//   },
//   content: {
//     padding: 24,
//   },
//   cta: {
//     marginTop: 24,
//     textTransform: 'initial',
//   },
// }));

// export const BlogCardDemo = React.memo(function BlogCard() {
//   const styles = useStyles();
//   const {
//     button: buttonStyles,
//     ...contentStyles
//   } = useBlogTextInfoContentStyles();
//   const shadowStyles = useOverShadowStyles();
//   return (
//     <Card className={cx(styles.root, shadowStyles.root)}>
//       <CardMedia
//         className={styles.media}
//         image={
//           'https://cdn.pixabay.com/photo/2023/03/09/14/46/bananas-7840213_640.jpg'
//         }
//       />
//       <CardContent>
//         <TextInfoContent
//           classes={contentStyles}
//           overline={'28 MAR 2019'}
//           heading={'What is Git ?'}
//           body={
//             'Git is a distributed version control system. Every dev has a working copy of the code and...'
//           }
//         />
//         <Button className={buttonStyles}>Read more</Button>
//       </CardContent>
//     </Card>
//   );
// });

// export default BlogCardDemo

import CalendarComponent from './Calender.component';
import { AppContext } from './context';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavButton from './NavButton';
import { useLocation } from 'react-router-dom';

function CalenderParent(props) {
    //in the props we will get the trip from the server 
    //we need to create from trip
    //dates Array (from start trip to end trip)
    //hours array is static
    //plans create from the json trip in props
    const location = useLocation();
    let trip = location.state.data;
   
    const [plans, setPlans] = React.useState([]);
    const [dates, setDates] = React.useState([]);
    const [myTrip, setMyTrip] = React.useState({});
    
    const [tripListener, setTripListener] = useState(false);

    // setMyTrip(trip._id);
   

    const updateTrip = async (tripToUpdate) => {
        console.log("updateTrip in PARENT")
        console.log(tripToUpdate._id);
        try {
            const { data } = await axios.post(
                `http://localhost:8080/trips/${tripToUpdate._id}`,
                tripToUpdate
            );
            //get the update trip
            if (data) {
                console.log("updated trip")
                console.log(data)
                setMyTrip(data);
                trip=myTrip;
            }

        } catch (ex) {
            console.log(ex);
        }
        console.log("insert update function in PARENT");
    }
    const initialTrip = async () => {
        console.log("initialTrip PARENT")
        //id of trip from props
        const { data } = await axios.get(`/trips/${trip._id}`);
        console.log(data);
        setMyTrip(data);
    }

    //PLANS we will get from server when we update we will need to render the component?
    let PLANS = [
        {
            month: 8, day: 25, events: [{

                allAttractionDetailes: {
                    AttractionDetails: {
                        Address: {
                            City: "תל אביב",
                            Number: "1",
                            Street: "לונה פארק"
                        },
                        _id: "63ab5a3ec9168fcf012b8792",
                        Name: 'אופניים',
                        Area: "צפון",
                        Category: "אקסטרים",
                        Destipopulation: "3",
                        Image: "6",
                        HoursNum: 8,
                        OpeningHours: "10:00",
                        ClosingHours: "18:00",
                        Price: [],
                        Description: " איזה כיף אופנים כל כך כיף אופנים שפשוט באלי לעזוב את הפרויקט הזה לעלות על אופנים וליסוע אל אבר הלא נודע עד שאני או האופנים נתייעף. המוקדם מבין ה2",
                        Url: "https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link"
                        , start: 9.5, end: 10.5,
                    },
                    Break: null,
                    Start: "2023-02-01T09:30:00.000Z",
                    TravelTimeFromPrev: 0,
                    DistanceFromPrev: 0
                }
            }
                , {
                allAttractionDetailes: {
                    AttractionDetails: {
                        Address: { City: "תל אביב", Number: "1", Street: "לונה פארק" }, _id: "63ab5a3ec9168fcf012b8792", Name: 'טיול בפארק', Area: "צפון", Category: "טבע", Destipopulation: "3",
                        Image: "6", HoursNum: 1, OpeningHours: "10:00", ClosingHours: "18:00", Price: [], description: "איזה כיף טיול בפארק",
                        Url: "https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link"
                        , start: 16.5, end: 15.0


                    }, Break: null, Start: "2023-02-01T14:30:00.000Z", TravelTimeFromPrev: 0, DistanceFromPrev: 0
                }
            }]
        },
        {
            month: 8, day: 27, events: [{
                allAttractionDetailes: {
                    AttractionDetails: {
                        Address: { City: "תל אביב", Number: "1", Street: "לונה פארק" }, _id: "637564d0e1009f9a613cec93", Name: 'גיפים', Area: "צפון", Category: "אקסטרים",
                        Destipopulation: "3", Image: "6", HoursNum: 3.25, OpeningHours: "10:00", ClosingHours: "18:00", Price: [], Description: "איזה כיף גיפים",
                        Url: "https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link"
                        , start: 10.25, end: 13.5,
                    }, Break: null, Start: "2023-02-03T10:25:00.000Z", TravelTimeFromPrev: 0, DistanceFromPrev: 0
                }
            }]
        }
    ]


    const initializeDates = () => {
        console.log("insert initialDates PARENT")

        let datesTrip = [];
        const t = myTrip
        let startDateTrip = new Date(myTrip.StartDate);
        startDateTrip.setDate(startDateTrip.getDate() - startDateTrip.getDay());

        let endDateTrip = new Date(myTrip.FinalDate);
        endDateTrip.setDate(endDateTrip.getDate() + (6 - endDateTrip.getDay()));

        for (; startDateTrip <= endDateTrip; startDateTrip.setDate(startDateTrip.getDate() + 1)) {
            datesTrip.push(new Date(startDateTrip));
        }
        var datesProps = datesTrip.map(date => {
            return {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
                title: date.toLocaleString('default', { weekday: 'long' })
            }
        })
        console.log(datesProps);
        setDates(datesProps);
    }

    const initializePlans = () => {
        console.log("initualize plans function");
        const attractions = myTrip.Attractions;
        console.log(attractions)
        const plans = [];
        let plan = {
            month: 0,
            day: 0,
            events: []
        };

        dates.forEach(date => {
            let attractionsInCurrentDate = attractions.filter(attr => (new Date(attr.Start).getDate()) === date.day && (new Date(attr.Start).getMonth() + 1) === date.month);
            plan.month = date.month;
            plan.day = date.day;

            const allAttractionsInCurrentDate = attractionsInDayFunc(attractionsInCurrentDate);
            plan.events = allAttractionsInCurrentDate;

            //send copy of the object
            plans.push(structuredClone(plan))
        });

        console.log("FINISH");
        setPlans(plans);
        console.log(plans)
    }

    const attractionsInDayFunc = (attractionsArr) => {

        let attractionInDay;
        const attractionsInDayArr = [];
        attractionsArr.forEach(attraction => {
            attractionInDay = {
                allAttractionDetailes: {},
                start: 0,
                end: 0

            };
            console.log("hi attraction");
            attractionInDay.allAttractionDetailes = attraction;

            console.log(attraction);
            const atStart = new Date();
            atStart.setTime(new Date(attraction.Start).getTime());
            atStart.setHours(atStart.getHours() - 2);
            const startNum = atStart.getHours() + (atStart.getMinutes() / 60);
            attractionInDay.start = startNum;
            console.log(attractionInDay.start);
            let hoursNumStr;
            let hoursNum;
            if (attractionInDay.allAttractionDetailes.AttractionDetails == null) {
                hoursNumStr = attractionInDay.allAttractionDetailes.Break.HoursNum.toString();
                hoursNum = attractionInDay.allAttractionDetailes.Break.HoursNum;
            }

            else {
                hoursNumStr = attractionInDay.allAttractionDetailes.AttractionDetails.HoursNum.toString();
                hoursNum = attractionInDay.allAttractionDetailes.AttractionDetails.HoursNum;
            }
            const end = new Date();
            end.setTime(atStart.getTime());
            const splitNum = hoursNumStr.split('.');
            const hours = parseInt(splitNum[0]);
            const minutes = hoursNum - splitNum[0];
            const calcMinutes = Math.floor(parseFloat(minutes) * 60);
            end.setHours(atStart.getHours() + hours);
            end.setMinutes(atStart.getMinutes() + calcMinutes);
            const endNum = end.getHours() + (end.getMinutes() / 60);
            attractionInDay.end = endNum;
            console.log(attractionInDay.end);

            attractionInDay.allAttractionDetailes.Start = new Date(attraction.Start);
            attractionInDay.allAttractionDetailes.Start.setTime(attraction.Start.getTime());
            attractionInDay.allAttractionDetailes.Start.setHours(attraction.Start.getHours() - 2);
            attractionsInDayArr.push(structuredClone(attractionInDay));

        });
        return attractionsInDayArr;
    }


    let allTrip;
    useEffect(() => {
        if (dates.length === 0) {
            return;
        }

        initializePlans();

    }, [dates]);
    useEffect(() => {
        if (myTrip === null) {
            return;
        }
        initializeDates();
        allTrip = myTrip;
        console.log(allTrip);
    }, [myTrip]);

    useEffect(() => {
        console.log("parent")
        // if(tripListener)
        const iTrip = async () => {
            await initialTrip();
        }
        iTrip();
    }, []);

    return (
        <div>
            <NavButton trip={myTrip} />

            <AppContext.Provider value={{ updateTrip, plans, myTrip }}>
                <CalendarComponent

                    dates={dates}
                    hours={[{ time: 9, backgroundColor: 'black' }, { time: 10, backgroundColor: 'black' }, { time: 11, backgroundColor: 'black' }, { time: 12, backgroundColor: 'black' }, { time: 13, backgroundColor: 'black' }, { time: 14, backgroundColor: 'black' }, { time: 15, backgroundColor: 'black' }, { time: 16, backgroundColor: 'black' }, { time: 17, backgroundColor: 'black' }, { time: 18, backgroundColor: 'black' }, { time: 19, backgroundColor: 'black' },]}
                    plans={plans}

                />
            </AppContext.Provider>
        </div>
    );
}

export default CalenderParent;