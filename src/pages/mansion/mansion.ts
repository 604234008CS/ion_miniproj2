import { RoomProvider } from './../../providers/room/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MansionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mansion',
  templateUrl: 'mansion.html',
})
export class MansionPage {
  mansionArray: any = [];
  price:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public mansion: RoomProvider, public alert: AlertController) {
    this.loadMansionData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MansionPage');
  }

  loadMansionData(){
    this.mansion.getMansion().subscribe(mansions => {
      this.mansionArray = mansions;
    });
  }

  goToDetail(mansion){
    this.navCtrl.push("DetailRoomPage", mansion);
  }

  back(){
    this.navCtrl.pop();
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.mansion.searchRent(val).subscribe(mansions => {
        this.mansionArray = mansions;
      });
    } else {
      this.loadMansionData();
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
          this.mansion.loadprice_1().subscribe(data=>{
           this.mansionArray = data;
          });
        }else if(this.price == 2){
          this.mansion.loadprice_2().subscribe(data=>{
            this.mansionArray = data;
           });
        }else if(this.price == 3){
          this.mansion.loadprice_3().subscribe(data=>{
            this.mansionArray = data;
           });
        }
      }
    });
    alert.present();
  }
}
