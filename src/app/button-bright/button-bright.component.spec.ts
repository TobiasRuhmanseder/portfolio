import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBrightComponent } from './button-bright.component';

describe('ButtonBrightComponent', () => {
  let component: ButtonBrightComponent;
  let fixture: ComponentFixture<ButtonBrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBrightComponent]
    });
    fixture = TestBed.createComponent(ButtonBrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
