import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CvService } from '../../cv.service';
import { Experience } from '../../models';

@Component({
  selector: 'dg-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent {
  public email = 'dmitry@example.com';
  public phone = '+222 (22) 222-22-22';
  public experience$: Observable<Experience[]> = this.cvService.experience();

  constructor(private readonly cvService: CvService) {}
}
