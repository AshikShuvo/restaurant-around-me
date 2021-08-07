import React from 'react'
import { Card } from 'antd';
import './RestaurantItem.css';
const RestaurantItem = ({data}) => {
   //renders a single restaurant
    return (
        <Card>
            <div className="custom-image">
            <img alt="example" width="100%" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" />
            </div>
            <div className="custom-card">
                <h3>{data.name}</h3>
                <p>{data.location.address}</p>
                <p>{data.distance+" "}Km Far from You </p>
            </div>
        </Card>
    )
}

export default RestaurantItem
