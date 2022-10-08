import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Education } from '../../models';

@Component({
  selector: 'dg-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvEducationComponent {
  @Input() public education: Education[] | null;
}
