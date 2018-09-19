import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public person ={
    name: "",
    id:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  let personId= navParams.data.person;
  this.person.name='Person '+ personId;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
