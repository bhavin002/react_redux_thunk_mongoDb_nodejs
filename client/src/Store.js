import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import { custReducer } from "./redux/reducer";

const allReducer = combineReducers({
    customers: custReducer
})

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
