import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* setJob(action) {
  try {
    yield axios.post('/api/job/post', action.payload);
    yield put({ type: 'SET_JOB', payload: action.payload });
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
// function* deleteJob(jobToDelete){
//     console.log (jobToDelete)
// }



  function* getDetails(jobId){
    try {
        console.log(jobId.payload.jobId)
        const jobDetails = yield axios.get(`/api/job/${jobId.payload.jobId}`);
        console.log('get details:', jobDetails);
        //we got the data, dispatch to details reducer
        console.log(jobDetails.data)
        yield put({type: 'SET_DETAILS', payload: jobDetails.data});
    } 
    catch {
        console.log('Getting DETAILS error');
    }
}


function* jobSaga() {
  yield takeLatest('SET_NEW_JOB', setJob);
  yield takeLatest('GET_JOB_HISTORY', getJobs);
  yield takeLatest('GET_DETAILS', getDetails)
//   yield takeLatest('DELETE_JOB', deleteJob)
  
}

export default jobSaga;
