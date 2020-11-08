import { combineReducers } from 'redux'
import { HomeReducer } from '../reducer/home_reducer';
import { LoginReducer } from '../reducer/login_reducer';


export const RootReducer = combineReducers({
    homeData : HomeReducer,
    loginData : LoginReducer
})