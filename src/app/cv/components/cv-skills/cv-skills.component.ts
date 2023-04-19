import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Skill } from '../../models';

@Component({
  selector: 'dg-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvSkillsComponent {
  @Input() title: string;
  @Input() public skills: Skill[] | null;
}
