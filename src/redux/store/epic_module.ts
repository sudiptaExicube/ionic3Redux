import { Injectable } from "@angular/core";
import { createEpicMiddleware } from "redux-observable";
import { HomeEpic } from "../epics/home_epic";
import { LoginEpic } from "../epics/login_epic";

@Injectable()
export class RootEpics{
    constructor(
        private homeEpics: HomeEpic,
        private loginEpics : LoginEpic
   
    ){}

    public createEpics(){
        return [
            createEpicMiddleware(this.homeEpics.home),
            createEpicMiddleware(this.loginEpics.login),
        ]
    }
}