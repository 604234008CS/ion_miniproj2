import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CondoPage } from './condo';

@NgModule({
  declarations: [
    CondoPage,
  ],
  imports: [
    IonicPageModule.forChild(CondoPage),
  ],
})
export class CondoPageModule {}
