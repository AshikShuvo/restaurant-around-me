import React, { useEffect, useRef } from 'react'
import restaurantIcon from '../assets/restaurantMarker.svg';
const { google } = window;
const Map = ({userLocation,restaurants}) => {
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
        });

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
                    title: name,
                    animation: google.maps.Animation.DROP,
                    icon,
                    map: map
                });
            });
        }
        // if (getDirection) {
        //     const selectedAddress = new window.google.maps.LatLng(restaurantLocation.lat, restaurantLocation.lng);
        //     directionService.setMap(map)
        //     drawRoute();
        //     let bounds = new window.google.maps.LatLngBounds();
        //     bounds.extend(selectedAddress);
        //     bounds.extend(userLatlng);
        //     map.fitBounds(bounds);
        // } else {
        //     initSearchBox();
        // }

    }
    return (
        <>
            <div style={{ height: "100vh", width: "100%" }} ref={mapRef} />
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
