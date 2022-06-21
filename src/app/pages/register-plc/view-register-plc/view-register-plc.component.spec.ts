import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterPlcComponent } from './view-register-plc.component';

describe('ViewRegisterPlcComponent', () => {
  let component: ViewRegisterPlcComponent;
  let fixture: ComponentFixture<ViewRegisterPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegisterPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisterPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
