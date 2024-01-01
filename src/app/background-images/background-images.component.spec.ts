import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImagesComponent } from './background-images.component';

describe('BackgroundImagesComponent', () => {
  let component: BackgroundImagesComponent;
  let fixture: ComponentFixture<BackgroundImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundImagesComponent]
    });
    fixture = TestBed.createComponent(BackgroundImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
