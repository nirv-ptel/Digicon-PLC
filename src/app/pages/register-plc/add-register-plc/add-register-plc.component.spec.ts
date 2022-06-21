import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterPlcComponent } from './add-register-plc.component';

describe('AddRegisterPlcComponent', () => {
  let component: AddRegisterPlcComponent;
  let fixture: ComponentFixture<AddRegisterPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegisterPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegisterPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
