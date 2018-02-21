import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExample1Component } from './form-example-1.component';

describe('FormExample1Component', () => {
  let component: FormExample1Component;
  let fixture: ComponentFixture<FormExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
