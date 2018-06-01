import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitacionPage } from './citacion';

@NgModule({
  declarations: [
    CitacionPage,
  ],
  imports: [
    IonicPageModule.forChild(CitacionPage),
  ],
})
export class CitacionPageModule {}
