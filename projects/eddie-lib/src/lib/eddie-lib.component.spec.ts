import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddieLibComponent } from './eddie-lib.component';

describe('EddieLibComponent', () => {
  let component: EddieLibComponent;
  let fixture: ComponentFixture<EddieLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EddieLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EddieLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
