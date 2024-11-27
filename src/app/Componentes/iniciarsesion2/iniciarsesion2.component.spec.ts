import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iniciarsesion2Component } from './iniciarsesion2.component';

describe('Iniciarsesion2Component', () => {
  let component: Iniciarsesion2Component;
  let fixture: ComponentFixture<Iniciarsesion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Iniciarsesion2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iniciarsesion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
