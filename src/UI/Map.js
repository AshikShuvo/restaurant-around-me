
import React, { useEffect, useRef } from 'react'
import restaurantIcon from '../assets/restaurantMarker.svg';
const { google } = window;

const Map = ({userLocation,restaurants}) => {
    console.log('render')
    const mapRef = useRef(null);
    let userLatlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);

    useEffect(() => {
        initGoogleMap();
    });

    const initGoogleMap = () => {

        let map = new google.maps.Map(mapRef.current, {
            zoom: 15,
            center: userLatlng
        });
        new google.maps.Marker({
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
                new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    
                    animation: google.maps.Animation.DROP,
                    icon,
                    map: map,
                    label:name
                    
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
