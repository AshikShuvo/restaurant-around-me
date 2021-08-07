import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { restaurantsActions } from '../Store/restaurant-slice';
import NavBar from '../UI/NavBar'
import Restaurants from '../UI/Restaurants'
import './Home.css';
import { Layout } from 'antd';
import axios from 'axios'
import Map from '../UI/Map';
const {  Footer,Content } = Layout;

const Home = () => {
    const dispatch=useDispatch(); //dispatcher for dispatching an action to populate the store;
    const [userLocation, setUserLocation] = useState({latitude:23.8349877,longitude:90.41676420000002});//local state to hold the user location coordinate.initialized by my coordinate used if the user denied location permission
    const [searchArea]=useState(3000);//searching area initialized with 3km.

   
    useEffect(()=>{
        //will ask for location when the application is accessed for first time
        getCurrentLocation();
    },[]);
    useEffect(()=>{
        //will fetch all restaurants data from fouresquire api each time the userLocation changed.
        fetchRestaurantData();
    },[userLocation])
    


    const getCurrentLocation=()=>{ 
        //function to get user location and populate the local state named userLocation
        if (navigator && navigator.geolocation) {//check first if the browser support navigator
            navigator.geolocation.getCurrentPosition((currentPosition) => {
                setUserLocation({...userLocation,latitude:currentPosition.coords.latitude,longitude:currentPosition.coords.longitude});
            });
        }
    }

 


    // fetch restaurant related data
    const fetchRestaurantData=()=>{
        axios(`https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20180805&limit=50&ll=${userLocation.latitude},${userLocation.longitude}&radius=${searchArea}&query=food`)
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
          //dispatching an action to populate restaurantsState belongs to root state in the redux store with all fetched restaurants data
          dispatch(restaurantsActions.setRestaurants(restaurants))
        })
        .catch(err => console.error(err));
    }

   

    return (
        <Layout className="layout">
            <NavBar />
            <Content style={{
                padding: 20,
                margin: 30,
                minHeight: 400,
            }}
            className="mapLayoutBackground">
               <Map userLocation={userLocation} />
            </Content>
            <Content style={{
                padding: 20,
                margin: 30,
                minHeight: 400,
            }}
            className="mapLayoutBackground"
            >
                <Restaurants />
            </Content>
            <Footer style={{ textAlign: 'center', }}>Thank You for Using This APP </Footer>
        </Layout>
        
    )
}

export default Home
