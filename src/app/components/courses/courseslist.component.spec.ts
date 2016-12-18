/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CourseslistComponent } from './courseslist.component';

describe('CourseslistComponent', () => {
  let component: CourseslistComponent;
  let fixture: ComponentFixture<CourseslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
