import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWithList } from './section-with-list';

describe('SectionWithList', () => {
  let component: SectionWithList;
  let fixture: ComponentFixture<SectionWithList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionWithList],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWithList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
