/*
    this is the home page which will be treated as an home page.
*/
import React, { useEffect, useState } from 'react'
// import Map from '../UI/MapContainer'
import NavBar from '../UI/NavBar'
import Restaurants from '../UI/Restaurants'
import SearchAndArea from '../UI/SearchAndArea'
import './Home.css';
import { Layout } from 'antd';
import axios from 'axios'
import Map from '../UI/Map';
const {  Footer,Content } = Layout;
const Home = () => {
    const [userLocation, setUserLocation] = useState({latitude:23.8349877,longitude:90.41676420000002,locationName:'It is not free'});
    const [searchArea,setSearchArea]=useState(3000);
    const [restaurants,setRestaurants]=useState([]);
    const getCurrentLocation=()=>{
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((currentPosition) => {
                setUserLocation({...userLocation,latitude:currentPosition.coords.latitude,longitude:currentPosition.coords.longitude});
            });
        }
    }
    useEffect(()=>{
        getCurrentLocation();
    },[]);
    
    // fetch restaurant related data
    const fetchRestaurantData=()=>{
        axios(`https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20210805&limit=3&ll=${userLocation.latitude},${userLocation.longitude}&radius=${searchArea}&query=restaurant`)
        .then((res) => {
            const restaurants=[];
          res.data.response.groups[0].items.forEach(({reasons,venue})=>{
              const {id,name,location,}=venue;
              const restaurant={
                  id,
                  name,
                  location:{
                      lat:location.lat,
                      lng:location.lng,
                      address:location.formattedAddress.toString()
                  },
                  distance:location.distance/1000
              };
              restaurants.push(restaurant);

          })
          setRestaurants(restaurants);
        })
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        fetchRestaurantData();
    },[userLocation])

    return (
        <Layout className="layout">
            <NavBar locationName={userLocation.locationName}/>
            <Content style={{
                padding: 20,
                margin: 30,
                minHeight: 400,
            }}
            className="mapLayoutBackground">
               <Map userLocation={userLocation} restaurants={restaurants}/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Thank You for Using This APP </Footer>
        </Layout>
        
    )
}

export default Home
