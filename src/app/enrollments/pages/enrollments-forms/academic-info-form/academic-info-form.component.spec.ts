import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInfoFormComponent } from './academic-info-form.component';

describe('AcademicInfoFormComponent', () => {
  let component: AcademicInfoFormComponent;
  let fixture: ComponentFixture<AcademicInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicInfoFormComponent]
    });
    fixture = TestBed.createComponent(AcademicInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
