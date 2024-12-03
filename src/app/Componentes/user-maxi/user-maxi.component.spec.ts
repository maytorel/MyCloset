import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMaxiComponent } from './user-maxi.component';

describe('UserMaxiComponent', () => {
  let component: UserMaxiComponent;
  let fixture: ComponentFixture<UserMaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMaxiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
