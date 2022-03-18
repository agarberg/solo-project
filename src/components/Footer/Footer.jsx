import React from 'react';
import './Footer.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';


function Footer() {
	const dispatch = useDispatch();

  return (  
  <footer>
<BottomNavigation>
  <BottomNavigationAction onClick={() => dispatch({ type: 'LOGOUT' })} label="Logout" icon={<LogoutIcon/>}/>
  <Link to="/user">
  <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
  </Link>
</BottomNavigation>
</footer>
  )
}

export default Footer;
