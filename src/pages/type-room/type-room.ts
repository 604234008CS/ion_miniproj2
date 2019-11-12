import { MansionPage } from './../mansion/mansion';
import { ApartmentPage } from './../apartment/apartment';
import { CondoPage } from './../condo/condo';
import { HomePage } from './../home/home';
import { DormPage } from './../dorm/dorm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypeRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-room',
  templateUrl: 'type-room.html',
})
export class TypeRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeRoomPage');
  }

  back(){
    this.navCtrl.push(HomePage);
  }

  gotoDorm(){
    this.navCtrl.push(DormPage);
  }

  gotoCondo(){
    this.navCtrl.push(CondoPage);
  }

  gotoApart(){
    this.navCtrl.push(ApartmentPage);
  }

  gotoMan(){
    this.navCtrl.push(MansionPage);
  }
}
