import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCollatzComponent } from './menucollatz.component';

describe('MenuCollatzComponent', () => {
  let component: MenuCollatzComponent;
  let fixture: ComponentFixture<MenuCollatzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCollatzComponent],
    });
    fixture = TestBed.createComponent(MenuCollatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
