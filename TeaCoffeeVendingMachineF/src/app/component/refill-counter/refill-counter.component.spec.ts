import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillCounterComponent } from './refill-counter.component';

describe('RefillCounterComponent', () => {
  let component: RefillCounterComponent;
  let fixture: ComponentFixture<RefillCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
