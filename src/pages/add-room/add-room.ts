import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";


/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {

  addRoomData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alert: AlertController, public loadingCtrl : LoadingController) {
    this.addRoomData.name = "";
    this.addRoomData.address = "";
    this.addRoomData.price = "";
    this.addRoomData.detail = "";
    this.addRoomData.type = "";
    this.addRoomData.sex = "";
    this.addRoomData.tel = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  addroom(){
    if(this.addRoomData.name != "" &&  this.addRoomData.address != "" && this.addRoomData.price != "" && this.addRoomData.detail != ""
    && this.addRoomData.type != "" && this.addRoomData.sex != "" && this.addRoomData.tel != ""){

      let url: string = "http://10.8.8.12/mini2/addroom.php";
      let datapost = JSON.stringify({
        name: this.addRoomData.name,
        address: this.addRoomData.address,
        price: this.addRoomData.price,
        detail: this.addRoomData.detail,
        type: this.addRoomData.type,
        sex: this.addRoomData.sex,
        tel: this.addRoomData.tel
      });

      this.http.post(url,datapost).subscribe(data=>{
        console.log(data);
        });
        let loader=this.loadingCtrl.create({
          content: "Please wait...",
          duration: 1000
        });
        loader.present();
        this.navCtrl.setRoot(HomePage);
          }else {
            let alert = this.alert.create({
              message: 'กรุณากรอกข้อมูลให้ครบ',
              buttons: [
                {
                  text: 'OK',
                  role: 'OK',
                }
              ]
            });
            alert.present();
          }
  }

}

