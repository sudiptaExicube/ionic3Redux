import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../core/store_model";
import { HomeData } from "../core/home_session";

@Injectable()
export class HomeActions{

    static HOME_FETCH = 'HOME_FETCH';
    static HOME_FETCH_SUCCESS = 'HOME_FETCH_SUCCESS';
    static HOME_FETCH_ERROR = 'HOME_FETCH_ERROR';

    constructor( public ngRedux : NgRedux<IAppState>){}

    homeDataFetch(lang: string){
        this.ngRedux.dispatch({
            type: HomeActions.HOME_FETCH,
            payload : lang
        })
    }
    homeDataSuccess(payload : HomeData){
        this.ngRedux.dispatch({
            type: HomeActions.HOME_FETCH_SUCCESS,
            payload: payload
        })
    }
    homeDataError(error){
        this.ngRedux.dispatch({
            type: HomeActions.HOME_FETCH_ERROR,
            error: error
        })
    }
}