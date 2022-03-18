
import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function History(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'GET_JOB_HISTORY'})
  }, []);

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const jobs = useSelector((store) => store.job);

function getDetails(jobId){
  console.log("clicked", jobId)
        dispatch({
            type: 'GET_DETAILS',
            payload: {
                jobId
            }
        })
        history.push('/details')
    }

  return (
    <> 
<table>
  <thead> 
  <tr>
    <th>Description</th>
    <th>Notes</th>
    <th>Date</th>
  </tr>
  </thead>
  <tbody>
{jobs.map((jobs, i) => {
      return (
        <tr key={jobs.id} onClick={() => getDetails(jobs.id)}>
          <td>{jobs.description}</td>
          <td>{jobs.notes}</td>
          <td>{jobs.date}</td>
        </tr>
      );
})}
</tbody>
</table>
        </>            
        )
}
export default History;
