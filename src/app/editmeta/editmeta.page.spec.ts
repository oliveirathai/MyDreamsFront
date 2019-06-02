import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmetaPage } from './editmeta.page';

describe('EditmetaPage', () => {
  let component: EditmetaPage;
  let fixture: ComponentFixture<EditmetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
