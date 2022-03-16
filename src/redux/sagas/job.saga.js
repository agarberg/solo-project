import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* setJob(action) {
  try {

    yield axios.post('/api/job/post', action.payload);

    // automatically log a user in after registration
    yield put({ type: 'SET_JOB', payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out

  } catch (error) {
    alert('Error sending job:', error);

  }
}

function* jobSaga() {
  yield takeLatest('SET_NEW_JOB', setJob);
}

export default jobSaga;
