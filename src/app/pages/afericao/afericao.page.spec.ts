import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfericaoPage } from './afericao.page';

describe('AfericaoPage', () => {
  let component: AfericaoPage;
  let fixture: ComponentFixture<AfericaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfericaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfericaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
