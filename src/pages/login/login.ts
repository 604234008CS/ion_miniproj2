import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  logindata: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public event: Events, public alert: AlertController) {
    this.logindata.username = "";
    this.logindata.password = "";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.logindata.username != "" && this.logindata.password != ""){
    console.log("user:", this.logindata.username);
    console.log("pass:", this.logindata.password);

      let url: string = "http://10.8.8.12/mini2/login.php";
      let dataPost = JSON.stringify({
        email: this.logindata.username, pass: this.logindata.password
      });

      this.http.post(url,dataPost).map(res => res.json()).subscribe(data => {
        if(data != null){
          this.event.publish('user:Loggedin');
          this.navCtrl.setRoot(HomePage,data);
        }else{
          let alert = this.alert.create({
            message: 'โปรดป้อน username และ password ให้ถูกต้อง',
            buttons: [
              {
                text: 'OK',
                role: 'OK',
              }
            ]
          });
          alert.present();
        }
      });
    }else{
      let alert = this.alert.create({
        message: 'กรุณาป้อน username และ password',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
          }
        ]
      });
      alert.present()
    }
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
