import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { CvService } from '../../cv.service';
import { Education, Experience, Skill } from '../../models';

@Component({
  selector: 'dg-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent {
  public experience$: Observable<Experience[]> = this.cvService.experience();
  public skills$: Observable<Skill[]> = this.cvService.skills();
  public languages$: Observable<Skill[]> = this.cvService.languages();
  public education$: Observable<Education[]> = this.cvService.education();

  constructor(
    private readonly cvService: CvService,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {}

  onGeneratePdf() {
    const element = this.elementRef.nativeElement;
    this.cvService.generateCvPdf(element);
  }
}
