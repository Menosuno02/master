import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijodeporteComponent } from './hijodeporte.component';

describe('HijodeporteComponent', () => {
  let component: HijodeporteComponent;
  let fixture: ComponentFixture<HijodeporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijodeporteComponent]
    });
    fixture = TestBed.createComponent(HijodeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
