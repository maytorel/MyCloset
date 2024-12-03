import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGoldComponent } from './user-gold.component';

describe('UserGoldComponent', () => {
  let component: UserGoldComponent;
  let fixture: ComponentFixture<UserGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserGoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
