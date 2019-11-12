import { RoomProvider } from './../../providers/room/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ApartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apartment',
  templateUrl: 'apartment.html',
})
export class ApartmentPage {
  apartArray: any = [];
  price:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public apart: RoomProvider, public alert: AlertController) {
    this.loadApartData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApartmentPage');
  }

  loadApartData(){
    this.apart.getApartment().subscribe(aparts =>{
      this.apartArray = aparts;
    });
  }

  goToDetail(apart){
    this.navCtrl.push("DetailRoomPage", apart);
  }

  back(){
    this.navCtrl.pop();
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.apart.searchRent(val).subscribe(aparts => {
        this.apartArray = aparts;
      });
    } else {
      this.loadApartData();
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
          this.apart.loadprice_1().subscribe(data=>{
           this.apartArray = data;
          });
        }else if(this.price == 2){
          this.apart.loadprice_2().subscribe(data=>{
            this.apartArray = data;
           });
        }else if(this.price == 3){
          this.apart.loadprice_3().subscribe(data=>{
            this.apartArray = data;
           });
        }
      }
    });
    alert.present();
  }
}
