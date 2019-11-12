import { Http } from '@angular/http';
import { RoomProvider } from './../../providers/room/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompareRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compare-rooms',
  templateUrl: 'compare-rooms.html',
})
export class CompareRoomsPage {

  result: any = {};
  value;
  show1: any = [];
  show2: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public show: RoomProvider, public http: Http) {
    this.result.room1 = "";
    this.result.room2 = "";   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompareRoomsPage');
    this.show.getRent().subscribe(data => {
      this.value = data;
    });
  }

  view(){
    if(this.result.room1 != ""){
      this.show.show(this.result.room1).subscribe(data => {
        this.show1 = data;
      });
    }
    if(this.result.room2 != ""){
      this.show.show(this.result.room2).subscribe(data => {
        this.show2 = data;
      });
    }
  }

  

}
