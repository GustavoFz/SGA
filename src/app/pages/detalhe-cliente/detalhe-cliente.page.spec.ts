import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheClientePage } from './detalhe-cliente.page';

describe('DetalheClientePage', () => {
  let component: DetalheClientePage;
  let fixture: ComponentFixture<DetalheClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
