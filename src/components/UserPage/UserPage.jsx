import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import './UserPage.css';
import { useDispatch } from 'react-redux'
import { HashRouter as Router, useHistory } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import IconButton from '@mui/material/IconButton';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  //get Time/Date for display on DOM
  const user = useSelector((store) => store.user);
  const currentTime = new Date();
  const month = currentTime.getMonth()+ 1;
  const day = currentTime.getDate();
  const dayOfWeekName = new Date().toLocaleString('default', {weekday: 'long'});

  //Local states for input fields:
	const [description, setDescription] = useState('');
	const [notes, setNotes] = useState('');
	const [ref, setRef] = useState('');
	const [hrsPaid, setHrsPaid] = useState('');
	const [hrsActual, setHrsActual] = useState('');

function handleSubmit (event){
  event.preventDefault();
  dispatch({
    type: 'SET_NEW_JOB',
    payload: {
      description: description,
      notes: notes,
      ref_ro_nu: ref,
      time_actual: hrsPaid,
      time_actual: hrsActual
    },
  });
  // history.push('/next page');
}
  return (
    <div className="container">
      <div className="hrsBilledDate">
        <p>{dayOfWeekName}</p>
        <br></br>
      <p>{month}/{day}</p>
      <h4>Hours this week</h4>
      </div>
      <form
							onSubmit={handleSubmit}
							className='jobSubmitForm'>
      <div className="inputFields">
      <TextField fullWidth 
      label="Job Description" id="fullWidth" variant="outlined" multiline maxRows={2}
      value={description} onChange={(event) => setDescription(event.target.value)}
      />
      <TextField fullWidth label="Notes" id="fullWidth" variant="outlined" multiline maxRows={2} margin="normal"
      value={notes} onChange={(event) => setNotes(event.target.value)}
      />
      <TextField fullWidth label="Reference Number" id="fullWidth" variant="outlined" margin="normal"
      value={ref} onChange={(event) => setRef(event.target.value)}
      />
      <TextField fullWidth label="Hours Paid" id="fullWidth" variant="outlined" margin="normal"
      value={hrsPaid} onChange={(event) => setHrsPaid(event.target.value)}
      />
      <TextField fullWidth label="Hours Actual" id="fullWidth" variant="outlined" margin="normal"
      value={hrsActual} onChange={(event) => setHrsActual(event.target.value)}
      />
      {/* //Photo Upload option saved for future use  */}
      {/* <TextField fullWidth label="Photo Upload" id="fullWidth" variant="outlined" margin="normal"
      value={ref} onChange={(event) => setRef(event.target.value)}
      /> */}
      </div>
      <IconButton aria-label="Submit" type='submit'>
  <DoubleArrowIcon />
  </IconButton>
      </form>



      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
