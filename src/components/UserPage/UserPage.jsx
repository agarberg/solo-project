import React, { useEffect } from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './UserPage.css';
import { useDispatch } from 'react-redux'
import { HashRouter as Router, useHistory } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import IconButton from '@mui/material/IconButton';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const hoursHistory = useSelector((store) => store.hoursHistory)

  useEffect(() => {
    dispatch({ type: 'GET_WEEKLY_HOURS' });
  }, []);


  //get Time/Date for display on DOM
  const currentTime = new Date();
  // const month = currentTime.getMonth()+ 1;
  // const day = currentTime.getDate();
  // const dayOfWeekName = new Date().toLocaleString('default', {weekday: 'long'});
  //date_time for input
  const [date, setDate] = React.useState(currentTime);
  //Local states for input fields:
	const [description, setDescription] = useState('');
	const [notes, setNotes] = useState('');
	const [ref, setRef] = useState('');
	const [hrsPaid, setHrsPaid] = useState('');
	const [hrsActual, setHrsActual] = useState('');


  console.log(hoursHistory[0].weekly_hours)

function handleSubmit (event){
  event.preventDefault();
  dispatch({
    type: 'SET_NEW_JOB',
    payload: {
      description: description,
      notes: notes,
      ref_ro_num: ref,
      time_paid: hrsPaid,
      time_actual: hrsActual,
      date: date,
    }});
    setHrsActual('');
    setHrsPaid('');
    setRef('');
    setNotes('');
    setDescription('');
  }
  
  // history.push('/next page');

  return (
    <div className="container">
      <div className="hrsBilledDate">
      <h4>Hours Last Week: {hoursHistory[1].weekly_hours}</h4>...............
        <h4>Hours this week {hoursHistory[0].weekly_hours}</h4>
      </div>
      <form onSubmit={handleSubmit} className='jobSubmitForm'>
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
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
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
