import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsSelectionComponent } from './subjects-selection.component';

describe('SubjectsSelectionComponent', () => {
  let component: SubjectsSelectionComponent;
  let fixture: ComponentFixture<SubjectsSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectsSelectionComponent]
    });
    fixture = TestBed.createComponent(SubjectsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
