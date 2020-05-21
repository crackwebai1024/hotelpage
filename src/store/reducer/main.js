import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    data: ""
}

const getnewstate = (state, action) => {
    state = updateObject(state, {
        data: action.data
    })
    return state
}
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ACTIONTYPE:
            return getnewstate(state, action);
        default:
            return initialState;
    }
};

export default reducer;