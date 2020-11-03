import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlockerComponent } from './flocker.component';

describe('FlockerComponent', () => {
  let component: FlockerComponent;
  let fixture: ComponentFixture<FlockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
