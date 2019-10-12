import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestPage } from './invest';

@NgModule({
  declarations: [
    InvestPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestPage),
  ],
})
export class InvestPageModule {}
