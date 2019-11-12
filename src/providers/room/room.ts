import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RoomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoomProvider {
  public baseURL = 'http://10.8.8.12/todoslim3/public/index.php/';

  constructor(public http: HttpClient) {
    console.log('Hello RoomProvider Provider');
  }

  getDorm() {
    const url = this.baseURL + 'dorm';
    return this.http.get(url);
  }

  getCondo() {
    const url = this.baseURL + 'condo';
    return this.http.get(url);
  }

  getApartment() {
    const url = this.baseURL + 'apartment';
    return this.http.get(url);
  }

  getMansion() {
    const url = this.baseURL + 'mansion';
    return this.http.get(url);
  }

  getRent(){
    const url = this.baseURL + 'rent';
    return this.http.get(url);
  }

  searchRent(query) {
    const url = this.baseURL + 'rent/search/' + query ;
    return this.http.get(url);
  }

  loadprice_1(){
    let url ='http://10.8.8.12/todoslim3/public/rent3000';
    return this.http.get(url);
  }

  loadprice_2(){
    let url ='http://10.8.8.12/todoslim3/public/rent3001';
    return this.http.get(url);
  }

  loadprice_3(){
    let url ='http://10.8.8.12/todoslim3/public/rent4000';
    return this.http.get(url);
  }

  show(room_name){
    let url = 'http://10.8.8.12/todoslim3/public/index.php/room/' + room_name;
    return this.http.get(url);
  }

  review(){
    let url = 'http://10.8.8.12/todoslim3/public/index.php/review';
    return this.http.get(url);
  }
}
