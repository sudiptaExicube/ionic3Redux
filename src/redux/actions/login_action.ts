import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../core/store_model";
import { LoginData } from "../core/login_session";

@Injectable()
export class LoginActions{

    static LOGIN_FETCH = 'LOGIN_FETCH';
    static LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
    static LOGIN_FETCH_ERROR = 'LOGIN_FETCH_ERROR';

    constructor( public ngRedux : NgRedux<IAppState>){}

    loginDataFetch(lang: string){
        this.ngRedux.dispatch({
            type: LoginActions.LOGIN_FETCH,
            payload : lang
        })
    }
    loginDataSuccess(payload : LoginData){
        this.ngRedux.dispatch({
            type: LoginActions.LOGIN_FETCH_SUCCESS,
            payload: payload
        })
    }
    loginDataError(error){
        this.ngRedux.dispatch({
            type: LoginActions.LOGIN_FETCH_ERROR,
            error: error
        })
    }
}