import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLayoutComponent } from './cv-layout.component';

describe('CvLayoutComponent', () => {
  let component: CvLayoutComponent;
  let fixture: ComponentFixture<CvLayoutComponent>;

  beforeEach(async(() => {
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
