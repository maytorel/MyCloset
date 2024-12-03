import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotomsComponent } from './botoms.component';

describe('BotomsComponent', () => {
  let component: BotomsComponent;
  let fixture: ComponentFixture<BotomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
