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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
    let jobId = details?.id
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
          id: details.id,
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
      defaultValue={details?.description} helperText="Description"
      onChange={(event) => setDescription(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" multiline maxRows={2} margin="normal"
      defaultValue={details?.notes} helperText="Notes"
      onChange={(event) => setNotes(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" margin="normal"
      defaultValue={details?.ref_ro_num} helperText="Reference Number"
      onChange={(event) => setRef(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" margin="normal"
      defaultValue={details?.time_paid} helperText="Hours Paid"
      onChange={(event) => setHrsPaid(event.target.value)}/>

      <TextField fullWidth id="fullWidth" variant="outlined" margin="normal"
      defaultValue={details?.time_actual} helperText="Hours Actual"
      onChange={(event) => setHrsActual(event.target.value)}/>

      <input type='submit' value='Update' />
      <IconButton onClick={deleteJob}aria-label="delete" sx={{ fontSize: 50 }} >
  <DeleteIcon fontSize="inherit" />
</IconButton>
      </form>
      </>
)
}

      export default DetailsPage;