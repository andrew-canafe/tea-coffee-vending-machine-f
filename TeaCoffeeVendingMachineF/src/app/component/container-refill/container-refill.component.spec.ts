import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRefillComponent } from './container-refill.component';

describe('ContainerRefillComponent', () => {
  let component: ContainerRefillComponent;
  let fixture: ComponentFixture<ContainerRefillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerRefillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
