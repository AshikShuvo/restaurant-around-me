/*
    this is the home page which will be treated as an home page.
*/
import React from 'react'
import Map from '../UI/Map'
import NavBar from '../UI/NavBar'
import Restaurants from '../UI/Restaurants'
import SearchAndArea from '../UI/SearchAndArea'
import './Home.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
    return (
        <Layout className="layout">
            <NavBar/>
            <Content style={{ padding: '0 50px' }}></Content>
            <Footer style={{ textAlign: 'center' }}>Thank You for Using This APP </Footer>
        </Layout>
    )
}

export default Home
