import { FERCH_MY_BIILS } from '../constants.js';

const initialState = {
    myBiils: []
};
const billsReducer = (state = initialState, action) => {
switch(action.type) {
    case FERCH_MY_BIILS:
        return {
            ...state,
            myBiils:action.payload
        };
    default:
        return state;
    }
}