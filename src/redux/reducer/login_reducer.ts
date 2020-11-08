import { LoginData } from '../core/login_session';
import { Action } from 'redux';
import { LoginActions } from '../actions/login_action';

const INITIAL_STATE : LoginData = {
    loginData: null,
    loading: false,
    error: ''
}

type Payload = any;
type Error = any;

export interface ActionWithPayload<T,E> extends Action{
    payload? : T,
    error? : E
}

export function LoginReducer(
    state : LoginData = INITIAL_STATE,
    action : ActionWithPayload<Payload,Error>
) : LoginData{
    switch(action.type){
        case LoginActions.LOGIN_FETCH :
            return{
                ...state,
                loginData : null,
                loading : true,
                error : ''
            }
        case LoginActions.LOGIN_FETCH_SUCCESS :
            return{
                ...state,
                loginData : action.payload,
                loading : false,
                error : ''
            }
        case LoginActions.LOGIN_FETCH_ERROR : 
            return{
                ...state,
                loginData : null,
                loading : false,
                error : action.error
            }
    }
    return state;
}