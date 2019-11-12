import { AddRoomPage } from './../pages/add-room/add-room';
import { LogoutPage } from './../pages/logout/logout';
import { CompareRoomsPage } from './../pages/compare-rooms/compare-rooms';
import { TypeRoomPage } from './../pages/type-room/type-room';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public event: Events, public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าแรก', component: HomePage},
      { title: 'ประเภทห้องเช่า', component: TypeRoomPage},
      { title: 'เปรียบเทียบราคาห้องเช่า', component: CompareRoomsPage},
      { title: 'ลงชื่อเข้าใช้', component: LoginPage}
    ];

    event.subscribe('user:Loggedin',() => {
      this.pages = [
        { title: 'หน้าแรก', component: HomePage},
        { title: 'ประเภทห้องเช่า', component: TypeRoomPage},
        { title: 'เปรียบเทียบราคาห้องเช่า', component: CompareRoomsPage},
        { title: 'เพิ่มห้องเช่า', component: AddRoomPage},
        { title: 'ลงชื่อออก', component: LogoutPage}
      ];
    });

    event.subscribe('user:Loggedout',() => {
      this.pages = [
        { title: 'หน้าแรก', component: HomePage},
        { title: 'ประเภทห้องเช่า', component: TypeRoomPage},
        { title: 'เปรียบเทียบราคาห้องเช่า', component: CompareRoomsPage},
        { title: 'ลงชื่อเข้าใช้', component: LoginPage}
      ];
    });
    
  

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
