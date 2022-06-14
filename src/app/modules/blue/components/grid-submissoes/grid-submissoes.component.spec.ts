/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridSubmissoesComponent } from './grid-submissoes.component';

describe('GridSubmissoesComponent', () => {
  let component: GridSubmissoesComponent;
  let fixture: ComponentFixture<GridSubmissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSubmissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSubmissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
