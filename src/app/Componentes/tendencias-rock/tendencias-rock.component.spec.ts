import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciasRockComponent } from './tendencias-rock.component';

describe('TendenciasRockComponent', () => {
  let component: TendenciasRockComponent;
  let fixture: ComponentFixture<TendenciasRockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TendenciasRockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendenciasRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
