import React from 'react'
import {Map, InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (userLocation) => {
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <Map
                google={window.google}
                initialCenter={{lat:23.8349877,lng:90.41676420000002}}
                zoom={20}
            >
                
            </Map>
        </div>
    )
}
MapContainer.defaultProps={
    userLocation:{
        latitude:23.8349877,
        longitude:90.41676420000002
    }
}
// export default Map
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1JOs7uIVVlAjGTFrn3Guu6Gn8nAHEzHU'
  })(MapContainer)
