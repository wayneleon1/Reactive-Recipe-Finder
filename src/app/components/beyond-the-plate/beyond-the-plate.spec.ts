import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondThePlate } from './beyond-the-plate';

describe('BeyondThePlate', () => {
  let component: BeyondThePlate;
  let fixture: ComponentFixture<BeyondThePlate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeyondThePlate],
    }).compileComponents();

    fixture = TestBed.createComponent(BeyondThePlate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
