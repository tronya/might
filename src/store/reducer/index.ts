import {todosReducer} from './todo';
import {combineReducers} from "redux";

export default combineReducers({
    todo: todosReducer,
});
