import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorebankingCompComponent } from './corebanking-comp.component';

describe('CorebankingCompComponent', () => {
  let component: CorebankingCompComponent;
  let fixture: ComponentFixture<CorebankingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorebankingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorebankingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
