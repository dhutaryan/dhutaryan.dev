import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dg-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvSummaryComponent implements OnInit {
  public yearsAsFrontend: number;

  private startDateAsFrontend = new Date(2018, 4);

  ngOnInit(): void {
    this.yearsAsFrontend = this.getWorkDurationAsFrontend();
  }

  private getWorkDurationAsFrontend(): number {
    const startYear = this.startDateAsFrontend.getFullYear();
    const startMonth = this.startDateAsFrontend.getMonth();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const yearsDifference = currentYear - startYear;
    const monthsDifference = currentMonth - startMonth;

    return yearsDifference + this.getCorrectionForYears(monthsDifference);
  }

  private getCorrectionForYears(monthsDifference: number): number {
    if (monthsDifference < 0) {
      return -0.5;
    }

    if (monthsDifference >= 6) {
      return 0.5;
    }

    return 0;
  }
}
