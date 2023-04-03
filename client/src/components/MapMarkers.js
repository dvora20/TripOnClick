import { Map, Marker, InfoWindow } from 'google-maps-react';
import React, { useState, useEffect, useRef } from 'react';
import "../css/Map.css";
import { Button } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const allMarkersOfTrip = [];
export default function MapShow() {
    const location = useLocation();
    const trip = location.state.data;
    console.log(trip);
    const [loading, setLoading] = useState(true);
    const [bounds, setBounds] = useState(null);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });//initialcenter
    const [selectedElement, setSelectedElement] = useState(false);
    const [selectedShowMarker, setSelectedShowMarker] = useState(false);

    const [activeMarker, setActiveMarker] = useState(null);
    const [showInfoWindow, setInfoWindowFlag] = useState(true);
    const [addresses, setAddresses] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [positions, setPositions] = useState([]);
    const mapRef = useRef(null);

    const allAttractions=trip.Attractions

   

    var getDaysArray = function (start, end) {
        console.log(start)
        for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    const s = new Date(trip.StartDate);
    const startWithoutTime = s.toISOString().split('T')[0];
    const e = new Date(trip.FinalDate);
    const endWithoutTime = e.toISOString().split('T')[0];
    var days = []
    days = getDaysArray(startWithoutTime, endWithoutTime);

    const setAddressesOfAttractions = () => {
        const addresesTemp = []
        // const allAtractions = trip.Attractions;
        allAttractions.forEach(attraction => {
            if(attraction.AttractionDetails)
            {
            addresesTemp.push({
                address: (attraction.AttractionDetails.Address.Street +
                    attraction.AttractionDetails.Address.Number +
                    attraction.AttractionDetails.Address.City),
                id: attraction._id
            });
        }
       
        })
        console.log(addresesTemp);
        setAddresses(addresesTemp);
    }
  
    const onMapReady = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        markers.forEach((marker) => {
            bounds.extend(new window.google.maps.LatLng(marker.position?.lat, marker.position?.lng));
        });
        setBounds(bounds);
        setCenter(bounds.getCenter())
        map.fitBounds(bounds);
    };


    useEffect(() => {
        const geocodeAddress = async (Address) => {
            try {
                const address = { address: "" }
                address.address = Address.address
                console.log(address);
                const geocoder = new window.google.maps.Geocoder();
                let latLng = {
                    id: "",
                    lat: 0,
                    lng: 0
                }
                await geocoder.geocode(address, async (results, status) => {
                    if (status === 'OK') {
                        const { lat, lng } = await results[0].geometry.location;
                        latLng.lat = await lat();
                        latLng.lng = await lng();
                        latLng.id = Address.id;
                        console.log("geocodeAddress")
                        console.log(latLng);
                    }
                    else {
                        throw new Error(`Geocoding failed for address "${address}"`);
                    }
                });
                return latLng;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        };

        const geocodeAddresses = async () => {
            const positionsTmp = [];
            for (let i = 0; i < addresses.length; i++) {
                const address = addresses[i];
                const location = await geocodeAddress(address);
                positionsTmp.push(location);
                await new Promise((resolve) => setTimeout(resolve, 50));
            }
            if (positionsTmp.length === addresses.length) {
                setPositions(positionsTmp);
            }
        };

        if (addresses.length > 0) {
            geocodeAddresses();
        }
    }, [addresses]);


 
    const setPositionsOfAddresesFinal = (tmp) => {
    }
    const getCenterOfMarkers = () => {

        // const center = {
        //     lat: positions.reduce((total, pos) => total + pos.lat, 0) / positions.length,
        //     lng: positions.reduce((total, pos) => total + pos.lng, 0) / positions.length
        // }

        // console.log("CENTER")
        // console.log(center);
        // return center;

        var bounds = new window.google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            console.log(markers[i]);
            bounds.extend(new window.google.maps.LatLng(markers[i].position?.lat, markers[i].position?.lng));
        }
        var center = bounds.getCenter();
        console.log("THE CENTER")
        console.log(center.lat());
        console.log(center.lng());
        const map = mapRef.current.map;
        map.setCenter(center);

    }

    useEffect(() => {
        if (positions.length === 0 || positions.length != addresses.length) {
            return;
        }
        console.log("POSITIONS:")
        console.log(positions);
        const markersTemp = [];
        let marker;

        allAttractions.filter(attraction=>attraction.AttractionDetails!==null).forEach((attraction, index) => {
            marker = {
                title: "",
                name: "",
                description: "",
                dateMarker: new Date(),
                time: '',
                position: { lat: 0, lng: 0 }
            }
            marker.title = attraction.AttractionDetails.Name;
            marker.name = attraction.AttractionDetails.Category;
            marker.description = attraction.AttractionDetails.Description;
            console.log(marker.description);
            marker.dateMarker = new Date(attraction.Start);
            console.log("the date : ")
            console.log(marker.dateMarker.getMonth() + 1)
            console.log(marker.dateMarker.getDate())
            let hoursAndMinutes = (marker.dateMarker.getHours() - 2) + ':' + marker.dateMarker.getMinutes();
            if (marker.dateMarker.getMinutes() === 0) {
                hoursAndMinutes = hoursAndMinutes + '0';
            }
            marker.time = hoursAndMinutes;
            // marker.position = positions[index];
            marker.position = getPositionOfAttraction(attraction._id);
            console.log("Marker:")
            console.log(marker);
            markersTemp.push(structuredClone(marker));
            allMarkersOfTrip.push(structuredClone(marker));
        })
        console.log(markersTemp);
        console.log("allMarkersOfTrip");
        console.log(allMarkersOfTrip);
        setMarkers(markersTemp);
    }, [positions])

    const getPositionOfAttraction = (attractionId) => {
        return positions.find(p => p?.id === attractionId)
    }

    const getAllMarkersInDate = (day, month) => {
        console.log(allMarkersOfTrip)
        const tmp = allMarkersOfTrip;
        console.log(tmp);
        tmp.forEach(position => console.log(position?.dateMarker?.getDate()))
        const a = tmp.filter(marker => (marker.dateMarker.getMonth() + 1) == month &&
            marker.dateMarker.getDate() == day);
        console.log(a);
        return a;
    }

    const getCenterOfPositionsInDate = (markers) => {
        console.log("getCenterOfPositionsInDate()")
        var bounds = new window.google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            console.log(markers[i])
            bounds.extend(new window.google.maps.LatLng(markers[i].position?.lat, markers[i].position?.lng));
        }
        var center = bounds.getCenter();
        console.log("THE CENTER")
        console.log(center.lat());
        console.log(center.lng());
        const map = mapRef.current.map;
        map.setCenter(center);
    }

    const seeAllMarkers = (e) => {
        setMarkers(allMarkersOfTrip);
        setCenterOfAllMarkers();
    }
    const generateError = (error) =>
        toast.error(error, {
            position: "top-left",
        });

    const changeMarkers = (e) => {
        const date = e.target.innerText;
        const dayAndMonth = date.split("/");
        console.log(dayAndMonth[0])
        console.log(dayAndMonth[1])

        const arr = getAllMarkersInDate(dayAndMonth[0], dayAndMonth[1]);
        if (arr.length === 0) {
            generateError("אין אטרקציות ביום הזה")
            return;
        }
        console.log("the arr")
        console.log(arr);
        setMarkers(arr);
        getCenterOfPositionsInDate(arr);
    }

    useEffect(() => {
        if (markers.length > 0) {
            setCenterOfAllMarkers();
            setLoading(false);
        }
    }, [markers]);

    const setCenterOfAllMarkers = () => {
        const bounds = new window.google.maps.LatLngBounds();
        markers.forEach((marker) => {
            bounds.extend(new window.google.maps.LatLng(marker.position?.lat, marker.position?.lng));
        });
        setBounds(bounds);
        setCenter(bounds.getCenter())
    }

    useEffect(() => {
        if (!selectedElement) {
            console.log("useEffect selectedElement")
            console.log(selectedElement);
            return;
        }
        console.log("useEffect selectedElement")
        console.log(selectedElement);
        setSelectedShowMarker(true);
    }, [selectedElement])

    useEffect(() => {
        setAddressesOfAttractions();
    }, [])

    // const url=attractions.url;
    const handleClick = () => {
        // window.open(url, "_blank");
      }

    return (

        <div>   {
            loading ? " " :
                <div>
                    <NavButton trip={trip} />
                    <div className='map-markers-general-div'>


                        <div className="map-markers-dates-div">
                            {days.map((date) => (
                                <div onClick={e => changeMarkers(e)}>
                                    <Button type="primary" ghost className="dates-map" >
                                        {date.getDate() + "/" + ((date.getMonth()) + 1) + "/" + date.getFullYear()}
                                        <CalendarOutlined style={{ fontSize: '20px' }} />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <Map className="map-markes-map-div"
                            ref={mapRef}
                            google={window.google}
                            zoom={6}
                            bounds={bounds}
                            onReady={onMapReady}
                        // initialCenter={center}
                        // initialCenter = {getCenterOfPositionsInDate(allMarkersOfTrip)}
                        >
                            {
                                markers.map((element, index) => {
                                    return <Marker
                                        key={index}
                                        id={index}
                                        position={element.position}
                                        title={element.title}
                                        time={element.time}
                                        description={element.description}
                                        onClick={(props, marker) => {
                                            console.log("click");
                                            setSelectedElement(true);
                                            const x = selectedElement;
                                            console.log(x);
                                            setActiveMarker(marker);
                                        }}
                                    />
                                })}

                            {(selectedShowMarker) ? (
                                <InfoWindow
                                    visible={showInfoWindow}
                                    marker={activeMarker}
                                    onCloseClick={() => {
                                        setSelectedElement(false);
                                        setSelectedShowMarker(false)
                                        setActiveMarker(null);

                                    }}
                                >
                                    <div className='info-window'>
                                        <h5>{activeMarker.title}</h5>
                                        <div className='hours-info-window'>
                                            <h6>{activeMarker.time}</h6>
                                            <ClockCircleOutlined style={{ fontSize: '20px' }} />
                                        </div>
                                        <h6 className='desc-info-window'>{activeMarker.description}</h6>
                                        {/* {
                                            allAttractions.map((item) => {
                                                <button onClick={ window.open(item.AttractionDetails.Url, "_blank")} className='button-info-window' type="submit" >לפרטים</button>
                                             })
                                        } */}

                                        <button  className='button-info-window' type="submit" >לפרטים</button>
                                    </div>
                                </InfoWindow>
                            ) : null}
                        </Map>

                        <div className="map-markers-button">
                            <Button type="primary" ghost className="dates-map" onClick={e => seeAllMarkers(e)} >
                                הצג הכל
                                <CalendarOutlined style={{ fontSize: '20px' }} />
                            </Button>

                        </div>
                    </div>
                </div>
        }

            <ToastContainer rtl={true} />

        </div>

    );
};