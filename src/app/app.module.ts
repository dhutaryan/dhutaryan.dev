import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvLayoutComponent } from './cv-layout/cv-layout.component';

@NgModule({
  declarations: [AppComponent, CvLayoutComponent],
  imports: [BrowserModule, FlexModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
