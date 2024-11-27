import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarteComponent } from './registarte.component';

describe('RegistarteComponent', () => {
  let component: RegistarteComponent;
  let fixture: ComponentFixture<RegistarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
