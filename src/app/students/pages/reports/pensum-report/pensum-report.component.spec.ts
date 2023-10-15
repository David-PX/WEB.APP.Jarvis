import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensumReportComponent } from './pensum-report.component';

describe('PensumReportComponent', () => {
  let component: PensumReportComponent;
  let fixture: ComponentFixture<PensumReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PensumReportComponent]
    });
    fixture = TestBed.createComponent(PensumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
