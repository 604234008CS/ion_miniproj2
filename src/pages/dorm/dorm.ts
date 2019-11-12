import { RoomProvider } from './../../providers/room/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dorm',
  templateUrl: 'dorm.html',
})
export class DormPage {

  roomArray: any = [];
  price:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, public dorm: RoomProvider, public alert: AlertController) {
    this.loadDormData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DormPage');
  }

  loadDormData(){
    this.dorm.getDorm().subscribe(dorms => {
      this.roomArray = dorms;
    });
  }

  goToDetail(dorm){
    this.navCtrl.push("DetailRoomPage", dorm);
  }

  back(){
    this.navCtrl.pop();
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.dorm.searchRent(val).subscribe(dorms => {
        this.roomArray = dorms;
      });
    } else {
      this.loadDormData();
    }
  }

  search(){
    let alert = this.alert.create();
    alert.setTitle('เลือกราคาห้องพัก');
    alert.addInput({
      type: 'radio',
      label: 'น้อยกว่า 3000',
      value: '1',
    });
  
    alert.addInput({
      type: 'radio',
      label: '3000-4000',
      value: '2'
    });
  
    alert.addInput({
      type: 'radio',
      label: 'มากว่า 4000',
      value: '3'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
      this.price =data;
        console.log(this.price);
        if(this.price==1){
          this.dorm.loadprice_1().subscribe(data=>{
           this.roomArray = data;
          });
        }else if(this.price == 2){
          this.dorm.loadprice_2().subscribe(data=>{
            this.roomArray = data;
           });
        }else if(this.price == 3){
          this.dorm.loadprice_3().subscribe(data=>{
            this.roomArray = data;
           });
        }
      }
    });
    alert.present();
  }
}
