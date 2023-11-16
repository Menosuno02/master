import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepersonajeComponent } from './updatepersonaje.component';

describe('UpdatepersonajeComponent', () => {
  let component: UpdatepersonajeComponent;
  let fixture: ComponentFixture<UpdatepersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepersonajeComponent]
    });
    fixture = TestBed.createComponent(UpdatepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
