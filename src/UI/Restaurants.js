import { Col, Input, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RestaurantItem from './RestaurantItem';

const Restaurants = () => {
    const restaurants=useSelector(state=>state.restaurantsState.restaurants);
    const [searchKey,setSearchKey]=useState('')
    const handleChange=(e)=>{
        setSearchKey(e.target.value);
    }
    return (
        <>
            <Content
                style={{textAlign:"center",marginBottom:'40px'}}
            >
                <h1>Restaurants All Around Me</h1>
                 <Input placeholder="Search by name"  style={{ width: 200 }} onChange={handleChange} />
            </Content>
            
            <Row gutter={16}>
                {restaurants&&restaurants.length>0&&restaurants.filter(item=>item.name.toLowerCase().includes(searchKey.toLowerCase())).map(item=><Col span={6} ><RestaurantItem data={item} key={item.id}/></Col>)}
                
            </Row>
        </>
    )
}


export default Restaurants
