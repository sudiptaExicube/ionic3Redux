import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { LoginData } from '../../redux/core/login_session';
import { LoginActions } from '../../redux/actions/login_action';
import { HomeData } from '../../redux/core/home_session';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @select(['loginData', 'loginData'])
  readonly loginData$ : Observable<LoginData>;
  @select(['homeData', 'homeData'])
  readonly homeData$ : Observable<HomeData>;
  constructor(public navCtrl: NavController,  public loginAction: LoginActions) {
    this.loginAction.loginDataFetch('en');
    this.loginData$.subscribe((data:any) => {
      if(data){
        console.log(data);
      }
    })
    this.homeData$.subscribe((data:any) => {
      if(data){
        console.log(data);
        if(data){
          
          console.log(data)
        }
        //
      }
    })
  }
}
