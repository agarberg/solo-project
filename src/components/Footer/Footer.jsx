import React from 'react';
import './Footer.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {


  return <footer>
<BottomNavigation
  showLabels
  // value={value}
  // onChange={(event, newValue) => {
  //   setValue(newValue);
  // }}
>
  <BottomNavigationAction label="LogOut" icon={<LogoutIcon/>}/>
  <BottomNavigationAction label="Back" icon={<ArrowBackIcon/>}/>
  <BottomNavigationAction label="Submit" icon={<ArrowForwardIcon/>}/>
</BottomNavigation>
    <LogOutButton/>

  </footer>;
}

export default Footer;
