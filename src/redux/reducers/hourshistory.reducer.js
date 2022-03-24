import { combineReducers } from 'redux';


const weeklyHoursReducer = (state = [''], action) => {
    switch (action.type) {
        case 'SET_WEEKLY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

const dailyHoursReducer = (state = [''], action) => {
    switch (action.type) {
        case 'SET_DAILY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

const monthyHoursReducer = (state = [''], action) => {
    switch (action.type) {
        case 'SET_MONTHLY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    weeklyHoursReducer,
    dailyHoursReducer,
    monthyHoursReducer,
  });