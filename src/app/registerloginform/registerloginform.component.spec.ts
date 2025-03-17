import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterloginformComponent } from './registerloginform.component';

describe('RegisterloginformComponent', () => {
  let component: RegisterloginformComponent;
  let fixture: ComponentFixture<RegisterloginformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterloginformComponent]
    });
    fixture = TestBed.createComponent(RegisterloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
