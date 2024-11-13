import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosUsuariosComponent } from './otros-usuarios.component';

describe('OtrosUsuariosComponent', () => {
  let component: OtrosUsuariosComponent;
  let fixture: ComponentFixture<OtrosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtrosUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
