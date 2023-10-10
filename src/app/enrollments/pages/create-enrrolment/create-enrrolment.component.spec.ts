import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnrrolmentComponent } from './create-enrrolment.component';

describe('CreateEnrrolmentComponent', () => {
  let component: CreateEnrrolmentComponent;
  let fixture: ComponentFixture<CreateEnrrolmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEnrrolmentComponent]
    });
    fixture = TestBed.createComponent(CreateEnrrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
