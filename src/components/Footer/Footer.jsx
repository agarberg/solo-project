import React from 'react';
import './Footer.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
	const dispatch = useDispatch();

  return <footer>
<BottomNavigation
  showLabels
>
  <BottomNavigationAction onClick={() => dispatch({ type: 'LOGOUT' })} 
  label="LogOut" icon={<LogoutIcon/>}/>
  <Link to="/user">
  <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
  </Link>
</BottomNavigation>

    
  </footer>;
}

export default Footer;
