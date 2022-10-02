import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Experience, Skill } from './models';
import { EXPERIENCE, SKILLS } from './constants';

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
}
