import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public http: Http) {
    this.registerData.name = "";
    this.registerData.sname = "";
    this.registerData.email = "";
    this.registerData.pass = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  registered(){
    if(this.registerData.name != "" && this.registerData.sname != "" && this.registerData.email != "" && this.registerData.pass != ""){
      console.log("name:", this.registerData.name);
      console.log("sname:", this.registerData.sname);
      console.log("email:", this.registerData.email);
      console.log("pass:", this.registerData.pass);

        let url: string = "http://10.8.8.12/mini2/register.php";
        let datapost = JSON.stringify({
          name: this.registerData.name,
          sname: this.registerData.sname,
          email: this.registerData.email,
          pass: this.registerData.pass
        });
        let alert = this.alert.create({
          message: 'ยืนยันการสมัคร',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.http.post(url,datapost)
                .subscribe(data=>{
                 console.log(data);
                 this.navCtrl.setRoot(LoginPage);
                });
              }
            },
            {
              text: 'Cancle',
              handler: () => {
                console.log('Disagree clicked');
              }
            }
  
          ]
        });
        alert.present();
   
      }else{
        let alert = this.alert.create({
          message: 'กรุณากรอกข้อมูล',
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

  cancel(){
    this.navCtrl.pop();
  }
}
