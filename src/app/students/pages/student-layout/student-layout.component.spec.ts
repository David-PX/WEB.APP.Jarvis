import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLayoutComponent } from './student-layout.component';

describe('StudentLayoutComponent', () => {
  let component: StudentLayoutComponent;
  let fixture: ComponentFixture<StudentLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLayoutComponent]
    });
    fixture = TestBed.createComponent(StudentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
