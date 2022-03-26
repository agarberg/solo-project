import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import BarChartIcon from '@mui/icons-material/BarChart';
import EventNoteIcon from '@mui/icons-material/EventNote';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
<> 
    <div className="nav">
    <Link className="navLink" to="/user">
    <p className="nav-title">tech time tracker</p>
            </Link> 
      
      
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
          <Link className="navLink" to="/login">
            Login / Register
          </Link>

          <Link className="navLink" to="/about">
            About
          </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}
            {/* <Link className="navLink" to="/info">
              Info Page
              </Link> */}
              <Link className="navLink" to="/pastperformance">
              <BarChartIcon sx={{ fontSize: 40 }} />
                </Link>
              
            <Link className="navLink" to="/history">
            <EventNoteIcon sx={{ fontSize: 40 }} />
        </Link>
        </>
        )}
      </div>
    </>
  );
}

export default Nav;
