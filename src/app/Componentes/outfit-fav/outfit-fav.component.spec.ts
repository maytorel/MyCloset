import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitFavComponent } from './outfit-fav.component';

describe('OutfitFavComponent', () => {
  let component: OutfitFavComponent;
  let fixture: ComponentFixture<OutfitFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutfitFavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutfitFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
