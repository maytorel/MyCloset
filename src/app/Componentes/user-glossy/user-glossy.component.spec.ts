import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGlossyComponent } from './user-glossy.component';

describe('UserGlossyComponent', () => {
  let component: UserGlossyComponent;
  let fixture: ComponentFixture<UserGlossyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserGlossyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGlossyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
