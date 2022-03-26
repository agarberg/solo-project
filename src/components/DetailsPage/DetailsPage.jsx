import React from 'react';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch } from 'react-redux'
import { HashRouter as Router, useHistory } from 'react-router-dom';
import History from '../History/History';
import { getDateRangePickerDayUtilityClass } from '@mui/lab';


function DetailsPage() {
  	const [description, setDescription] = useState();
  	const [notes, setNotes] = useState();
  	const [ref, setRef] = useState();
  	const [hrsPaid, setHrsPaid] = useState();
  	const [hrsActual, setHrsActual] = useState();

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const details = useSelector((store) => store.details);
    const weeklyHours = useSelector((store) => store.weeklyHoursReducer)
    console.log (details)
    const userId = user.id
    let jobId = details[0]?.id
    // console.log(userId)
    console.log(jobId)
  // console.log(details[0].description)
  console.log(details[0]?.description)

      function handleSubmit(event) {
      event.preventDefault();
      dispatch({
        type: 'EDIT_DETAILS',
        payload: {
          description: description,
          notes: notes,
          ref_ro_num: ref,
          time_paid: hrsPaid,
          time_actual: hrsActual,
          user_id: userId,
          id: details[0].id,
        }})
        history.push('/history')
        dispatch({
          type: 'GET_JOB_HISTORY',
          })
        }

      function deleteJob(){
        dispatch({
            type: 'DELETE_JOB',
            payload: {
              jobId
            }
        })
        history.push('/history')
      }
console.log (details[0])
  return (
    <>
      <form onSubmit={handleSubmit} className='editForm'>

      <TextField fullWidth id="fullWidth" variant="outlined" multiline maxRows={2}
      defaultValue={details[0]?.description} helperText="Description"
      onChange={(event) => setDescription(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" multiline maxRows={2} margin="normal"
      defaultValue={details[0]?.notes} helperText="Notes"
      onChange={(event) => setNotes(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" margin="normal"
      defaultValue={details[0]?.ref_ro_num} helperText="Reference Number"
      onChange={(event) => setRef(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" margin="normal"
      defaultValue={details[0]?.time_paid} helperText="Hours Paid"
      onChange={(event) => setHrsPaid(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" margin="normal"
      defaultValue={details[0]?.time_actual} helperText="Hours Actual"
      onChange={(event) => setHrsActual(event.target.value)}/>

      <input type='submit' value='Update' />
      </form>
      <button onClick={deleteJob}>Delete</button>
      </>
)
}

      export default DetailsPage;