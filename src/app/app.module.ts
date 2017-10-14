import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PC, SP
import { AppPCModule } from './component/pc/app.pc.module';
import { AppSPModule } from './component/sp/app.sp.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppPCModule,
    AppSPModule
  ],
  exports: [
    AppPCModule,
    AppSPModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
