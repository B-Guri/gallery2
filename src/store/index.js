import {applyMiddleware, combineReducers, createStore} from "redux";
import {photoListReducer} from "./photoListReducer.js"
import thunk from "redux-thunk"
import { pageReducer } from "./pageReducer.js";


const rootReducer = combineReducers({
    photos: photoListReducer, 
    page: pageReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));