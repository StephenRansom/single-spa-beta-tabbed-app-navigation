import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent2Component } from './subcomponent2.component';

describe('Subcomponent2Component', () => {
  let component: Subcomponent2Component;
  let fixture: ComponentFixture<Subcomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
