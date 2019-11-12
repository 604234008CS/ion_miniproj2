import { RoomProvider } from './../../providers/room/room';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DetailRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-room',
  templateUrl: 'detail-room.html',
})
export class DetailRoomPage {
  detail: any = [];
  score: any;
  member: any = {};
  reviewArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing, public http: Http, public event: Events, public show: RoomProvider) {
    this.event.subscribe('star-rating:changed',(note)=>{
      this.score = note;
    });
    this.member.text = "";
    this.showreview();
  }

  ionViewDidLoad() {
    this.detail = this.navParams.data;
    console.log('ionViewDidLoad DetailRoomPage');
  }

  sharing(){
    this.socialSharing.shareViaFacebook(this.detail.room_name, this.detail.detail).then(() => {

    }).catch(() => {

    });
  }

  scoreview(roomid){
    if(this.score != ''){
      let url = 'http://10.8.8.12/mini2/upscore.php';
      let datapost = JSON.stringify({
        score: this.score,
        idroom:roomid
      });
      this.http.post(url, datapost).subscribe(data => {
        console.log(data);
      })
    }else{
      console.log("FOUND");
    }
  }

  textroom(roomid){ 
    if(this.member.text != ""){
      let url = "http://10.8.8.12/mini2/review.php";
      let datapost = JSON.stringify({
        text: this.member.text,
        idroom:roomid
      });
      this.http.post(url, datapost).subscribe(data => {
        console.log(data);
      })
    }else{
      console.log("FOUND");
    }
  }

  showreview(){
    this.show.review().subscribe(shows => {
      this.reviewArray = shows;
    })
  }

  back(){
    this.navCtrl.pop();
  }
}
