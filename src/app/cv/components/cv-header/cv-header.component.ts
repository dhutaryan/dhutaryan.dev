import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'dg-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvHeaderComponent {
  @Output() generatePdf = new EventEmitter<void>();

  public email = 'dmitry.gutoryan@gmail.com';
}
