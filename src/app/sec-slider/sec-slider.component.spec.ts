import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSliderComponent } from './sec-slider.component';

describe('SecSliderComponent', () => {
  let component: SecSliderComponent;
  let fixture: ComponentFixture<SecSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecSliderComponent]
    });
    fixture = TestBed.createComponent(SecSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
