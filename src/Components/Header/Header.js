import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import { Button, ConfigProvider, Space } from "antd";

export default function Header() {

  const navigate = useNavigate();

  return (
    <div className="Header">
        <div className="headerleft" style={{marginLeft: '20px'}}>
            <Link to='/'><img className="header__icon" src="./imdb.jpg" alt="logo"/></Link>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#FFEA00',
                },
              }}
            >
              <Space size={40}>
              <Button style={{marginLeft: '20px'}} ghost onClick={()=>{navigate('movielist/popular')}}>Popular</Button>
              <Button ghost onClick={()=>{navigate('movielist/top_rated')}}>Top Rated</Button>
              <Button ghost onClick={()=>{navigate('movielist/upcoming')}}>Upcomming</Button>
              </Space>
            </ConfigProvider>
        </div>
    </div>
  );
}