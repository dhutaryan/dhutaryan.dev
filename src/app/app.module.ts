import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvLayoutComponent } from './cv-layout/cv-layout.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { SummaryInfoComponent } from './summary-info/summary-info.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CvLayoutComponent,
    GeneralInfoComponent,
    ExperienceInfoComponent,
    SummaryInfoComponent,
    SectionHeaderComponent,
  ],
  imports: [BrowserModule, FlexModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
