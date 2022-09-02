import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CvLayoutComponent } from './cv-layout.component';

describe('CvLayoutComponent', () => {
  let component: CvLayoutComponent;
  let fixture: ComponentFixture<CvLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CvLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
