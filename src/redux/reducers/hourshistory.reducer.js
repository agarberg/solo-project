import { combineReducers } from 'redux';


const weeklyHours = (state = [''], action) => {
    switch (action.type) {
        case 'SET_WEEKLY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

const dailyHours = (state = [''], action) => {
    switch (action.type) {
        case 'SET_DAILY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

const monthlyHours = (state = [''], action) => {
    switch (action.type) {
        case 'SET_MONTHLY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    weeklyHours,
    dailyHours,
    monthlyHours,
  });