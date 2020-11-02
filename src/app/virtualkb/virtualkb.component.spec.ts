import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualkbComponent } from './virtualkb.component';

describe('VirtualkbComponent', () => {
  let component: VirtualkbComponent;
  let fixture: ComponentFixture<VirtualkbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualkbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
