import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAllDaysComponent } from './sale-all-days.component';

describe('SaleAllDaysComponent', () => {
  let component: SaleAllDaysComponent;
  let fixture: ComponentFixture<SaleAllDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleAllDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAllDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
