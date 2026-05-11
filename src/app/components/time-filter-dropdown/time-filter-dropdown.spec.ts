import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFilterDropdown } from './time-filter-dropdown';

describe('TimeFilterDropdown', () => {
  let component: TimeFilterDropdown;
  let fixture: ComponentFixture<TimeFilterDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeFilterDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeFilterDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
