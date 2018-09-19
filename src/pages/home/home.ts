import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public people =new Array();
private detailPage;
  constructor(public navCtrl: NavController) {
    this.detailPage = DetailPage;
    this.people.push({name:"person one", id:1});
    this.people.push({name:"person two", id:2});
    this.people.push({name:"person three", id:3});



  }
  loadDetail(person){
    console.log(person);
    this.navCtrl.push(this.detailPage,{ person : person.id});
  }


}
