import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './containers/cv';
import { CvHeaderComponent } from './components/cv-header';

@NgModule({
  declarations: [CvComponent, CvHeaderComponent],
  imports: [CommonModule, FlexLayoutModule, CvRoutingModule],
})
export class CvModule {}
