/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursedetailsComponent } from './coursedetails.component';

describe('CoursedetailsComponent', () => {
  let component: CoursedetailsComponent;
  let fixture: ComponentFixture<CoursedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
