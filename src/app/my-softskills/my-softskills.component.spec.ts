import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySoftskillsComponent } from './my-softskills.component';

describe('MySoftskillsComponent', () => {
  let component: MySoftskillsComponent;
  let fixture: ComponentFixture<MySoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySoftskillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
