import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSalesAllDaysComponent } from './total-sales-all-days.component';

describe('TotalSalesAllDaysComponent', () => {
  let component: TotalSalesAllDaysComponent;
  let fixture: ComponentFixture<TotalSalesAllDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSalesAllDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSalesAllDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
