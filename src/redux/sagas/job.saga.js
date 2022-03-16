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

function* jobSaga() {
  yield takeLatest('SET_NEW_JOB', setJob);
  yield takeLatest('GET_JOB_HISTORY', getJobs);
}

export default jobSaga;
