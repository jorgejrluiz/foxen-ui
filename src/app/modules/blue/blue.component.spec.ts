/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlueComponent } from './blue.component';

describe('BlueComponent', () => {
  let component: BlueComponent;
  let fixture: ComponentFixture<BlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
