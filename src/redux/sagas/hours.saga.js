import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {  useHistory } from 'react-router-dom';
import { connectAdvanced } from 'react-redux';

function* getWeeklyHours(userId){
    try {
        console.log(userId.payload)
        const weeklyHours = yield axios.get(`/api/hours/weekly/${userId.payload}`);
        //we got the data, dispatch to details reducer
        console.log(weeklyHours)
        yield put({type: 'SET_WEEKLY_HOURS', payload: weeklyHours.data});
    } 
    catch(error) {
      alert('Error setting weekly hour history:', error);
    }
}
function* getDailyHours(userId){
    try {
        console.log(userId.payload)
        const dailyHours = yield axios.get(`/api/hours/daily/${userId.payload}`);
        //we got the data, dispatch to details reducer
        console.log(dailyHours)
        yield put({type: 'SET_DAILY_HOURS', payload: dailyHours.data});
    } 
    catch(error) {
      alert('Error setting daily hour history:', error);
    }
}

function* getMonthlyHours(userId){
    try {
        console.log(userId.payload)
        const monthlyHours = yield axios.get(`/api/hours/monthly/${userId.payload}`);
        //we got the data, dispatch to details reducer
        console.log(monthlyHours)
        yield put({type: 'SET_MONTHLY_HOURS', payload: monthlyHours.data});
    } 
    catch(error) {
      alert('Error setting Monthly hour history:', error);
    }
}

function* hoursSaga() {
    yield takeLatest('GET_WEEKLY_HOURS', getWeeklyHours)
    yield takeLatest('GET_DAILY_HOURS', getDailyHours)
    yield takeLatest('GET_MONTHLY_HOURS', getMonthlyHours)
  }
  
  export default hoursSaga;
  