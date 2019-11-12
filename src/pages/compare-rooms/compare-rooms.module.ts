import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompareRoomsPage } from './compare-rooms';

@NgModule({
  declarations: [
    CompareRoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompareRoomsPage),
  ],
})
export class CompareRoomsPageModule {}
