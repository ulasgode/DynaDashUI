import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryContainerComponent } from './factory-container.component';

describe('FactoryContainerComponent', () => {
  let component: FactoryContainerComponent;
  let fixture: ComponentFixture<FactoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
