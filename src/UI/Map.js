import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import restaurantIcon from '../assets/restaurantMarker.svg';
const { google } = window; //window got accessed to google map related services api via script attached in public/index.html

const Map = ({userLocation}) => {

    const restaurants=useSelector(state=>state.restaurantsState.restaurants);//getting restaurants data from store
    const mapRef = useRef(null); //reference to the div where the map will be mounted
    let userLatlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);//used by google place api

    useEffect(() => {
        initGoogleMap();
    });

    const initGoogleMap = () => {
        //initializing google map provided by google place api
        let map = new google.maps.Map(mapRef.current, {
            zoom: 15,
            center: userLatlng
        });
        new google.maps.Marker({
            //positioning the marker on users current location
            position: userLatlng,
            title: "User Location",
            map: map
        },[]);

        if (restaurants) {
            let icon = {
                url: restaurantIcon,
                size: new google.maps.Size(100, 100),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 45)
            };

            restaurants.forEach(({ name, location }) => {
                //marking restaurants location
                new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    animation: google.maps.Animation.DROP,
                    icon,
                    map: map,
                    label:name,
                });
            });
        }
    }
    return (
        <>
            {userLocation&&<div style={{ height: "100vh", width: "100%" }} ref={mapRef} />}
        </>
    )
}
Map.defaultProps={
    userLocation:{
        latitude:23.8349877,
        longitude:90.41676420000002
    }
}


export default Map
