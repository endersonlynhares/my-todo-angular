import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthComponent } from './input-auth.component';

describe('InputAuthComponent', () => {
  let component: InputAuthComponent;
  let fixture: ComponentFixture<InputAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAuthComponent]
    });
    fixture = TestBed.createComponent(InputAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
