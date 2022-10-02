import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CvService } from '../../cv.service';
import { Experience, Skill } from '../../models';

@Component({
  selector: 'dg-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent {
  public experience$: Observable<Experience[]> = this.cvService.experience();
  public skills$: Observable<Skill[]> = this.cvService.skills();

  constructor(private readonly cvService: CvService) {}
}
