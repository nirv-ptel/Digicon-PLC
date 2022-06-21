import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerPlcComponent } from './view-customer-plc.component';

describe('ViewCustomerPlcComponent', () => {
  let component: ViewCustomerPlcComponent;
  let fixture: ComponentFixture<ViewCustomerPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
