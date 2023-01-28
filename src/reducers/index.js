import { combineReducers } from "redux";

const initialState = {
    products: []
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default combineReducers({
    information: productsReducer
})