import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciaCoquetteComponent } from './tendencia-coquette.component';

describe('TendenciaCoquetteComponent', () => {
  let component: TendenciaCoquetteComponent;
  let fixture: ComponentFixture<TendenciaCoquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TendenciaCoquetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendenciaCoquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
