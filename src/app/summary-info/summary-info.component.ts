import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dg-summary-info',
  templateUrl: './summary-info.component.html',
  styleUrls: ['./summary-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
