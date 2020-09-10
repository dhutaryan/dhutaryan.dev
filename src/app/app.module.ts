import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvLayoutComponent } from './cv-layout/cv-layout.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';

@NgModule({
  declarations: [AppComponent, CvLayoutComponent, GeneralInfoComponent, ExperienceInfoComponent],
  imports: [BrowserModule, FlexModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
