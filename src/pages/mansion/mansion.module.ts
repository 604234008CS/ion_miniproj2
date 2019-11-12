import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MansionPage } from './mansion';

@NgModule({
  declarations: [
    MansionPage,
  ],
  imports: [
    IonicPageModule.forChild(MansionPage),
  ],
})
export class MansionPageModule {}
