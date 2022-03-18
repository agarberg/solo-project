import React from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch } from 'react-redux'
import { HashRouter as Router, useHistory } from 'react-router-dom';

function DetailsPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const details = useSelector((store) => store.details);
    console.log (details[0])

    // console.log (details[0].description)
 
    function handleChange(event) {
        // dispatch({ 
        //             type: 'EDIT_ONCHANGE', 
        //             payload: { property: 'github_name', value: event.target.value }
        //         });
      }  

      function deleteJob(){
        // dispatch({
        //     type: 'DELETE_JOB',
        //     payload: {
        //         details
        //     }
        // })
        // history.push('/history')
      }
      
      function handleSubmit(event) {
        event.preventDefault();
    
      };


  return (
      <>
    {/* <div className="container">
    <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event)}
          value={details[0].description}
        />

        <input type='submit' value='Update Student' />
      </form> */}
{/* 

 
    <form>
      <div className="inputFields">
      <TextField onChange={(event) => handleChange(event)} fullWidth 
      label="Job Description" id="fullWidth" variant="outlined" multiline maxRows={2}
      value={details.description} />
      <TextField onChange={(event) => handleChange(event)}fullWidth label="Notes" id="fullWidth" variant="outlined" multiline maxRows={2} margin="normal"
      value={details.notes}
      />
      <TextField onChange={(event) => handleChange(event)}fullWidth label="Reference Number" id="fullWidth" variant="outlined" margin="normal"
      value={details.ref_ro_num} 
      />
      <TextField onChange={(event) => handleChange(event)}fullWidth label="Hours Paid" id="fullWidth" variant="outlined" margin="normal"
      value={details.time_paid} 
      />
      <TextField onChange={(event) => handleChange(event)}fullWidth label="Hours Actual" id="fullWidth" variant="outlined" margin="normal"
      value={details.time_actual} 
      />
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
          value={details.date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      </div>
      <input type='submit' value='Update' />
      </form> 
       <button onClick={deleteJob}>Delete</button>
      </div>
       */}
      </>  
);
}
      export default DetailsPage;
