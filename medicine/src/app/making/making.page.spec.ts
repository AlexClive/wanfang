import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingPage } from './making.page';

describe('MakingPage', () => {
  let component: MakingPage;
  let fixture: ComponentFixture<MakingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
