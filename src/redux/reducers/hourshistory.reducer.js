const hoursHistoryReducer = (state = [''], action) => {
    switch (action.type) {
        case 'SET_WEEKLY_HOURS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default hoursHistoryReducer