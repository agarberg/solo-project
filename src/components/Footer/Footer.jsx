import React from 'react';
import './Footer.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';

function Footer() {
	const dispatch = useDispatch();

  return (  
  <footer>
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
<BottomNavigation>
  <BottomNavigationAction onClick={() => dispatch({ type: 'LOGOUT' })} 
  icon={<LogoutIcon fontSize="large"/>}/>
  <Link to="/user">
  <BottomNavigationAction icon={<HomeIcon fontSize="large" />}/>
  </Link>
</BottomNavigation>
</Paper>
</footer>
)
}

export default Footer;
