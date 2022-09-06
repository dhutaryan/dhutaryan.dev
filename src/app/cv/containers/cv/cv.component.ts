import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dg-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent {
  public email = 'dmitry@example.com';
  public phone = '+222 (22) 222-22-22';
}
