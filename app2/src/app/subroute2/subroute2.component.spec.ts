import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subroute2Component } from './subroute2.component';

describe('Subroute2Component', () => {
  let component: Subroute2Component;
  let fixture: ComponentFixture<Subroute2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subroute2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subroute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
