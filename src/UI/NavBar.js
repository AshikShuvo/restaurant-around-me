import { PageHeader, Tag } from 'antd'
import React from 'react'
import './NavBar.css'
const NavBar = () => {
    return (
        <PageHeader
        className="site-page-header"
        title="Restaurant Around Me"
        subTitle="Access to Your Location Is Required"
        extra={[<Tag color="blue" key='3'>Nikunja 2</Tag>]}
      />
       
    )
}

export default NavBar
