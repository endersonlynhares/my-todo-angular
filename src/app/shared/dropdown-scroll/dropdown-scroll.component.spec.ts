import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownScrollComponent } from './dropdown-scroll.component';

describe('DropdownScrollComponent', () => {
  let component: DropdownScrollComponent;
  let fixture: ComponentFixture<DropdownScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownScrollComponent]
    });
    fixture = TestBed.createComponent(DropdownScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
