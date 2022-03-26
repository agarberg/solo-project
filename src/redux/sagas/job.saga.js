import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { HashRouter as Router, useHistory } from 'react-router-dom';
import { connectAdvanced } from 'react-redux';



function* setJob(action) {
  try {
    yield axios.post('/api/job/post', action.payload);
    yield put({ type: 'GET_JOB' });
  } catch (error) {
    alert('Error sending job:', error);
  }
}
function* getJobs() {
    try {
      const jobs = yield axios.get('/api/job/get');
      console.log(jobs.data)
      yield put({ type: 'REDUCE_JOBS', payload: jobs.data });
    } catch (error) {
      alert('Error sending job:', error);
  
    }
  }

  function* editDetails(editedDetails){
    console.log(editedDetails.payload)
    axios.put(`/api/job/${editedDetails.payload.user_id}`, editedDetails.payload)
        .then( response => {
          alert('job updated successfully!')
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
  };

  function* deleteJob(jobId){
    console.log(jobId.payload.jobId)
    axios.delete(`/api/job/delete/${jobId.payload.jobId}`)
        .then( response => {
          console.log('delete request sent')
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
  }

function* getDetails(jobId){
  try {
      console.log(jobId.payload.clickJob)
      const jobDetails = yield axios.get(`/api/job/${jobId.payload.clickJob}`);
      console.log('get details:', jobDetails);
      //we got the data, dispatch to details reducer
      console.log(jobDetails.data)
      yield put({type: 'SET_DETAILS', payload: jobDetails.data});
  } 
  catch(error) {
    alert('Error sending job:', error);
  }
}


function* jobSaga() {
  yield takeLatest('SET_NEW_JOB', setJob);
  yield takeLatest('GET_JOB_HISTORY', getJobs);
  yield takeLatest('GET_DETAILS', getDetails)
  yield takeLatest('EDIT_DETAILS', editDetails)
  yield takeLatest('DELETE_JOB', deleteJob)
}

export default jobSaga;
