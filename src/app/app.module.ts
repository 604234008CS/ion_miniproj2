import { CompareRoomsPage } from './../pages/compare-rooms/compare-rooms';
import { AddRoomPage } from './../pages/add-room/add-room';
import { LogoutPage } from './../pages/logout/logout';
import { MansionPage } from './../pages/mansion/mansion';
import { ApartmentPage } from './../pages/apartment/apartment';
import { CondoPage } from './../pages/condo/condo';
import { TypeRoomPage } from './../pages/type-room/type-room';

import { DormPage } from './../pages/dorm/dorm';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoomProvider } from '../providers/room/room';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DormPage,
    TypeRoomPage,
    CondoPage,
    ApartmentPage,
    MansionPage,
    LogoutPage,
    AddRoomPage,
    CompareRoomsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DormPage,
    TypeRoomPage,
    CondoPage,
    ApartmentPage,
    MansionPage,
    LogoutPage,
    AddRoomPage,
    CompareRoomsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RoomProvider
  ]
})
export class AppModule { }
