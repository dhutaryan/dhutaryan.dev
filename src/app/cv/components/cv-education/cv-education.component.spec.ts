import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEducationComponent } from './cv-education.component';

describe('CvEducationComponent', () => {
  let component: CvEducationComponent;
  let fixture: ComponentFixture<CvEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
