import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerPlcComponent } from './add-customer-plc.component';

describe('AddCustomerPlcComponent', () => {
  let component: AddCustomerPlcComponent;
  let fixture: ComponentFixture<AddCustomerPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
