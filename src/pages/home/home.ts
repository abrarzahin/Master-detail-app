import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public people =new Array();
  constructor(public navCtrl: NavController) {
    this.people.push({name:"person one",id:1});
    this.people.push({name:"person two",id:2});
    this.people.push({name:"person three",id:3});



  }

}
