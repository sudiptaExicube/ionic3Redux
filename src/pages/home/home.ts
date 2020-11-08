import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { HomeData } from '../../redux/core/home_session';
import { HomeActions } from '../../redux/actions/home_actions';
import { ListPage } from './../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @select(['homeData', 'homeData'])
  readonly homeData$ : Observable<HomeData>;
  constructor(public navCtrl: NavController,  public homeAction: HomeActions) {
 
  }
  login(){
    let data :any = {
      "username":"demo",
      "password":"12345678"
    }
    this.homeAction.homeDataFetch(data);
    this.homeData$.subscribe((data:any) => {
      if(data){
      //  console.log(data);
        if(data){
          this.navCtrl.push(ListPage)
        }
        //
      }
    })
   
  }
}
