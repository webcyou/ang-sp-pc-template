import { NgModule } from '@angular/core';

import {
  AppSpComponent,
  TopComponent
} from './index';

@NgModule({
  declarations: [
    AppSpComponent,
    TopComponent
  ],
  exports: [
    AppSpComponent,
    TopComponent
  ],
})
export class AppSPModule { }
