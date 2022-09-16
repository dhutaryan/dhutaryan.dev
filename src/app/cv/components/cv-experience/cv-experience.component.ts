import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Experience } from '../../models';

@Component({
  selector: 'dg-cv-experience',
  templateUrl: './cv-experience.component.html',
  styleUrls: ['./cv-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvExperienceComponent {
  @Input() public experience: Experience[] | null;
}
