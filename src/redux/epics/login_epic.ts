import { Injectable } from "@angular/core";
import { LoginActions } from "../actions/login_action";
import { ActionsObservable } from 'redux-observable'
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";



@Injectable()
export class LoginEpic{
    
    constructor(public loginAction : LoginActions, public http: HttpClient){}

    login = (action$ : ActionsObservable<any>) => {
        return action$.ofType(LoginActions.LOGIN_FETCH)
        .mergeMap(({payload}) => {
            return new Observable(() => {
                console.log(payload);
                this.http.get('assets/data/data.json').subscribe((data: any) => {
                    if(data){
                        console.log(data);
                        this.loginAction.loginDataSuccess(data.allData.eventData);
                    }
                })                
            })
        })
    }
}