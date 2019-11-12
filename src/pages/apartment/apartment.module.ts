import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApartmentPage } from './apartment';

@NgModule({
  declarations: [
    ApartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(ApartmentPage),
  ],
})
export class ApartmentPageModule {}
