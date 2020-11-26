import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsScheduleComponent } from './bills-schedule.component';

describe('BillsScheduleComponent', () => {
  let component: BillsScheduleComponent;
  let fixture: ComponentFixture<BillsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
