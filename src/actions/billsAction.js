import { FERCH_MY_BIILS } from '../constants.js';
export function fetchBiils(myBills) {
    return {
        type: FERCH_MY_BIILS,
        payload: myBills
    }
}