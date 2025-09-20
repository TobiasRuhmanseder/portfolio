import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsBackendComponent } from './my-skills-backend.component';

describe('MySkillsBackendComponent', () => {
  let component: MySkillsBackendComponent;
  let fixture: ComponentFixture<MySkillsBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySkillsBackendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySkillsBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
