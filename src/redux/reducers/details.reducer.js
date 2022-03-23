const detailsReducer = (state = [], action) => {
    console.log (action.payload)
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// const detailsReducer = (state = [], action) => {
//     if (action.type === 'SET_DETAILS'){
//         return action.payload;
//     }
//     if (action.type === 'EDIT_ONCHANGE') {
//         return {
//             ...state,
//             [action.payload.property]: action.payload.value
//         }
//     }
//     if (action.type ==='EDIT_CLEAR') {
//         return {}; 
//     }
//     return state;
// }


export default detailsReducer;

