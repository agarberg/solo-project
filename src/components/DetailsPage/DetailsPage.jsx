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
  useEffect(() => {
  
  }, []);

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const details = useSelector((store) => store.details);
    // const [description, setDescription] = useState('Loading!');
    console.log (details)
    // setDescription (details)


    // description = (details[0].description)
// getData = async () => {
//     const description = await fetch(details[0].description)
//     then(response => response.json());
// }
    function handleChange(event) {
        dispatch({ 
                    type: 'EDIT_ONCHANGE', 
                    payload: { property: 'description', value: event.target.value }
                });
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
    

    <div className="container">
    <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event)}
          value={details[0]?.description}
        />

        <input type='submit' value='Update' />
      </form>
</div>
 
  
      
);
}
      export default DetailsPage;
