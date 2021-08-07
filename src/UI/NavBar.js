import { PageHeader } from 'antd'
import React from 'react'
import './NavBar.css'
const NavBar = () => {
    return (
        <PageHeader
        className="site-page-header"
        style={{backgroundColor:"#fff"}}
        title="Restaurant Around Me"
        subTitle="Access to Your Location Is Required"
        
      />
       
    )
}

export default NavBar
