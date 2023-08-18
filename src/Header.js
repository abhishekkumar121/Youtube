import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";



function Header() {
  const[inputSearch,setInputSearch]=useState("");
  return (
    <div className='header'>
        <div className='header_left'> 
            <MenuIcon />
            <Link to="/">
            <img
                className='header_logo'
                src='https://th.bing.com/th/id/OIP.3DAZAJW3HMX8ICfboJWUkwHaFj?pid=ImgDet&rs=1'
                alt='' />
            </Link>    
        </div>

        <div className='header_input'>
            <input 
            onChange={(e)=> setInputSearch(e.target.value)} 
            value={inputSearch} 
            placeholder='Search' 
            type='text'/>
            <Link to={`/search/${inputSearch}`}> 
            <SearchIcon className="header_inputbutton"/>
            </Link>
            
        </div>

        <div className='header_icons'>
            <VideocamSharpIcon className='header_icon'/>
            <AppsSharpIcon className='header_icon'/>
            <NotificationsSharpIcon className='header_icon'/>
            <Avatar 
            alt="Abhishek Kumar"
            src="https://media.licdn.com/dms/image/D4D03AQFbJxLO0SsPWA/profile-displayphoto-shrink_100_100/0/1675492023755?e=1696464000&v=beta&t=QEtLqrh1JOWzzXkykszTXzkv6eGoBCTr-u9fKU8qNUo"
            />
        </div>
    
    </div>
  )
}

export default Header
