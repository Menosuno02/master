import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosfuncionComponent } from './empleadosfuncion.component';

describe('EmpleadosfuncionComponent', () => {
  let component: EmpleadosfuncionComponent;
  let fixture: ComponentFixture<EmpleadosfuncionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosfuncionComponent]
    });
    fixture = TestBed.createComponent(EmpleadosfuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
