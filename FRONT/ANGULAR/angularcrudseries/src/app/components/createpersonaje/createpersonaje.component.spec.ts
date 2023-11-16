import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepersonajeComponent } from './createpersonaje.component';

describe('CreatepersonajeComponent', () => {
  let component: CreatepersonajeComponent;
  let fixture: ComponentFixture<CreatepersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepersonajeComponent]
    });
    fixture = TestBed.createComponent(CreatepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
