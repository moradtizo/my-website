import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginusersComponent } from './loginusers.component';

describe('LoginusersComponent', () => {
  let component: LoginusersComponent;
  let fixture: ComponentFixture<LoginusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
