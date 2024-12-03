import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceComponent } from './acce.component';

describe('AcceComponent', () => {
  let component: AcceComponent;
  let fixture: ComponentFixture<AcceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
