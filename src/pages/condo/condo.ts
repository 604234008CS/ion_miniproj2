import { RoomProvider } from './../../providers/room/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CondoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-condo',
  templateUrl: 'condo.html',
})
export class CondoPage {
  condoArray: any = [];
  price:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public condo: RoomProvider, public alert: AlertController) {
    this.loadCondoData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CondoPage');
  }

  loadCondoData(){
    this.condo.getCondo().subscribe(condos => {
      this.condoArray = condos;
    });
  }

  goToDetail(condo){
    this.navCtrl.push("DetailRoomPage", condo);
  }

  back(){
    this.navCtrl.pop();
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.condo.searchRent(val).subscribe(condos => {
        this.condoArray = condos;
      });
    } else {
      this.loadCondoData();
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
          this.condo.loadprice_1().subscribe(data=>{
           this.condoArray = data;
          });
        }else if(this.price == 2){
          this.condo.loadprice_2().subscribe(data=>{
            this.condoArray = data;
           });
        }else if(this.price == 3){
          this.condo.loadprice_3().subscribe(data=>{
            this.condoArray = data;
           });
        }
      }
    });
    alert.present();
  }
}
