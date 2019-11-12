import { RoomProvider } from './../../providers/room/room';
import { DormPage } from './../dorm/dorm';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rentArray: any = [];
  price:any={};

  constructor(public navCtrl: NavController, public rent:RoomProvider, public alert: AlertController) {
    this.loadRentData();
  }

  loadRentData(){
    this.rent.getRent().subscribe(rents =>{
      this.rentArray = rents;
    });

  }

  goToDetail(rent){
    this.navCtrl.push("DetailRoomPage", rent);
  }

  gotoDorm(){
    this.navCtrl.push(DormPage);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.rent.searchRent(val).subscribe(rents => {
        this.rentArray = rents;
      });
    } else {
      this.loadRentData();
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
          this.rent.loadprice_1().subscribe(data=>{
           this.rentArray = data;
          });
        }else if(this.price == 2){
          this.rent.loadprice_2().subscribe(data=>{
            this.rentArray = data;
           });
        }else if(this.price == 3){
          this.rent.loadprice_3().subscribe(data=>{
            this.rentArray = data;
           });
        }
      }
    });
    alert.present();
  }

}
