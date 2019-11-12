import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailRoomPage } from './detail-room';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    DetailRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailRoomPage),
    StarRatingModule
  ],
})
export class DetailRoomPageModule {}
