import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTodayComponent } from './sale-today.component';

describe('SaleTodayComponent', () => {
  let component: SaleTodayComponent;
  let fixture: ComponentFixture<SaleTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
