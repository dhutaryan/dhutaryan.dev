import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dg-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvHeaderComponent {
  public email = 'dmitry.gutoryan@gmail.com';
}
