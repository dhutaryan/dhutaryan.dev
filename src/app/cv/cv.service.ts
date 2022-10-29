import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import * as html2pdf from 'html2pdf.js';

import { Education, Experience, Skill } from './models';
import { EDUCATION, EXPERIENCE, SKILLS } from './constants';

@Injectable({ providedIn: 'root' })
export class CvService {
  public experience(): Observable<Experience[]> {
    return of(EXPERIENCE).pipe(
      map((experience) => experience.sort((a, b) => b.order - a.order)),
    );
  }

  public skills(): Observable<Skill[]> {
    return of(SKILLS);
  }

  public education(): Observable<Education[]> {
    return of(EDUCATION);
  }

  public generateCvPdf(element: HTMLElement): void {
    const options = {
      filename: 'CV_Dzmitry_Hutaryan.pdf',
      margin: 8,
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      html2canvas: { dpi: 300, letterRendering: true },
      pagebreak: { mode: ['avoid-all', 'css'] },
    };

    html2pdf().from(element).set(options).save();
  }
}
