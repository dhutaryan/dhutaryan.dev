import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dg-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
