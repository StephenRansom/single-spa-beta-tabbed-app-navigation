import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subroute1Component } from './subroute1.component';

describe('Subroute1Component', () => {
  let component: Subroute1Component;
  let fixture: ComponentFixture<Subroute1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subroute1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subroute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
