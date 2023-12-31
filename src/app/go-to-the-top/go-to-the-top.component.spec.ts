import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToTheTopComponent } from './go-to-the-top.component';

describe('GoToTheTopComponent', () => {
  let component: GoToTheTopComponent;
  let fixture: ComponentFixture<GoToTheTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoToTheTopComponent]
    });
    fixture = TestBed.createComponent(GoToTheTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
