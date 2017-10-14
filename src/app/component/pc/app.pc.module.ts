import { NgModule } from '@angular/core';

import {
  AppPcComponent,
  TopComponent
} from './index';

@NgModule({
  declarations: [
    AppPcComponent,
    TopComponent
  ],
  exports: [
    AppPcComponent,
    TopComponent
  ],
})
export class AppPCModule { }
