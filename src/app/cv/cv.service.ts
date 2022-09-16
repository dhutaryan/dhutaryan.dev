import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Experience } from './models';
import { EXPERIENCE } from './constants';

@Injectable({ providedIn: 'root' })
export class CvService {
  public experience(): Observable<Experience[]> {
    return of(EXPERIENCE).pipe(
      map((experience) => experience.sort((a, b) => b.order - a.order)),
    );
  }
}
