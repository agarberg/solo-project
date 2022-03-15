import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const currentTime = new Date();
  const month = currentTime.getMonth() + 1;
  const day = currentTime.getDate();
  const dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'});

  return (
    <div className="container">
      <div className="hrsBilledDate">
        <p>{dayOfWeekName}</p>
      <p>{month}/{day}</p>
      <h4>Hours this week</h4>
      </div>
      <div className="inputFields">
      <TextField fullWidth 
      label="Job Description" 
      id="fullWidth" variant="outlined" 
      multiline
      maxRows={2}/>
      <TextField fullWidth label="Notes" 
      id="fullWidth" variant="outlined"
      multiline
      maxRows={2}
      margin="normal"/>
      <TextField fullWidth label="Reference Number" id="fullWidth" variant="outlined" margin="normal"/>
      <TextField fullWidth label="Hours Paid" id="fullWidth" variant="outlined" margin="normal"/>
      <TextField fullWidth label="Hours Actual" id="fullWidth" variant="outlined" margin="normal"/>
      <TextField fullWidth label="Photo Upload" id="fullWidth" variant="outlined" margin="normal"/>
      </div>



      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
