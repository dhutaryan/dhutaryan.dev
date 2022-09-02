import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceInfoComponent } from './experience-info.component';

describe('ExperienceInfoComponent', () => {
  let component: ExperienceInfoComponent;
  let fixture: ComponentFixture<ExperienceInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
