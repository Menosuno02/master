import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosmultipleComponent } from './empleadosmultiple.component';

describe('EmpleadosmultipleComponent', () => {
  let component: EmpleadosmultipleComponent;
  let fixture: ComponentFixture<EmpleadosmultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosmultipleComponent]
    });
    fixture = TestBed.createComponent(EmpleadosmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
