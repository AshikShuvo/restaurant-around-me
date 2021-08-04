/*
    this is the home page which will be treated as an home page.
*/
import React, { useEffect, useState } from 'react'
import Map from '../UI/Map'
import NavBar from '../UI/NavBar'
import Restaurants from '../UI/Restaurants'
import SearchAndArea from '../UI/SearchAndArea'
import './Home.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
    const [userLocation, setLocation] = useState({latitude:23.8349877,longitude:90.41676420000002,locationName:'It is not free'});
    const getCurrentLocation=()=>{
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((currentPosition) => {
                setLocation({...userLocation,latitude:currentPosition.coords.latitude,longitude:currentPosition.coords.longitude});
            });
        }
    }
    useEffect(()=>{
        getCurrentLocation();
    },[])
    return (
        <Layout className="layout">
            <NavBar locationName={userLocation.locationName}/>
            <Content style={{ padding: '0 50px' }}></Content>
            <Footer style={{ textAlign: 'center' }}>Thank You for Using This APP </Footer>
        </Layout>
    )
}

export default Home
