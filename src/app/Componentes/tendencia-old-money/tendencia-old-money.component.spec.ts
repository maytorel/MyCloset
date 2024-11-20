import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciaOldMoneyComponent } from './tendencia-old-money.component';

describe('TendenciaOldMoneyComponent', () => {
  let component: TendenciaOldMoneyComponent;
  let fixture: ComponentFixture<TendenciaOldMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TendenciaOldMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendenciaOldMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
