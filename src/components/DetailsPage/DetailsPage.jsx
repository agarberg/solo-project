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
  console.log(details.description)

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
        // setHrsActual('');
        // setHrsPaid('');
        // setRef('');
        // setNotes('');
        // setDescription('');
        history.push('/history')
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

  return (
    <>
      <form onSubmit={handleSubmit} className='editForm'>
      <TextField fullWidth label={details[0]?.description} id="fullWidth" variant="outlined" multiline maxRows={2}
      onChange={(event) => setDescription(event.target.value)}/>
      <TextField fullWidth label={details[0]?.notes} id="fullWidth" variant="outlined" multiline maxRows={2} margin="normal"
      onChange={(event) => setNotes(event.target.value)}/>
      <TextField fullWidth label={details[0]?.ref} id="fullWidth" variant="outlined" margin="normal"
      onChange={(event) => setRef(event.target.value)}/>
      <TextField fullWidth label={details[0]?.hrsPaid} id="fullWidth" variant="outlined" margin="normal"
      onChange={(event) => setHrsPaid(event.target.value)}/>
      <TextField fullWidth label={details[0]?.hrsActual} id="fullWidth" variant="outlined" margin="normal"
      onChange={(event) => setHrsActual(event.target.value)}/>
      <input type='submit' value='Update' />
      </form>
      <button onClick={deleteJob}>Delete</button>
      </>
)
}

      export default DetailsPage;