import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './containers/cv';
import { CvHeaderComponent } from './components/cv-header';
import { CvExperienceComponent } from './components/cv-experience';
import { CvSkillsComponent } from './components/cv-skills/cv-skills.component';
import { CvEducationComponent } from './components/cv-education/cv-education.component';

@NgModule({
  declarations: [
    CvComponent,
    CvHeaderComponent,
    CvExperienceComponent,
    CvSkillsComponent,
    CvEducationComponent,
  ],
  imports: [CommonModule, FlexLayoutModule, CvRoutingModule],
})
export class CvModule {}
