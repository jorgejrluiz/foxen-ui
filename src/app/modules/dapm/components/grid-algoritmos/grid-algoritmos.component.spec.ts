/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridAlgoritmosComponent } from './grid-algoritmos.component';

describe('GridAlgoritmosComponent', () => {
  let component: GridAlgoritmosComponent;
  let fixture: ComponentFixture<GridAlgoritmosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAlgoritmosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAlgoritmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
