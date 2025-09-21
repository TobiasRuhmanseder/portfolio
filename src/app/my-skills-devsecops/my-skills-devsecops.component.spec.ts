import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsDevsecopsComponent } from './my-skills-devsecops.component';

describe('MySkillsDevsecopsComponent', () => {
  let component: MySkillsDevsecopsComponent;
  let fixture: ComponentFixture<MySkillsDevsecopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySkillsDevsecopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySkillsDevsecopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
