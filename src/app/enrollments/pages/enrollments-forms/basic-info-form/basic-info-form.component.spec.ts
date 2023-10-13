import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoFormComponent } from './basic-info-form.component';

describe('BasicInfoFormComponent', () => {
  let component: BasicInfoFormComponent;
  let fixture: ComponentFixture<BasicInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicInfoFormComponent]
    });
    fixture = TestBed.createComponent(BasicInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
