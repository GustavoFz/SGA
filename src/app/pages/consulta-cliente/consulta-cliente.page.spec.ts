import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaClientePage } from './consulta-cliente.page';

describe('ConsultaClientePage', () => {
  let component: ConsultaClientePage;
  let fixture: ComponentFixture<ConsultaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
