import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasteComponent } from './toaste.component';

describe('ToasteComponent', () => {
  let component: ToasteComponent;
  let fixture: ComponentFixture<ToasteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToasteComponent]
    });
    fixture = TestBed.createComponent(ToasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
