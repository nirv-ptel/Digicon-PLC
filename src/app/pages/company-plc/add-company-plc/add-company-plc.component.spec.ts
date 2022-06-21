import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyPlcComponent } from './add-company-plc.component';

describe('AddCompanyPlcComponent', () => {
  let component: AddCompanyPlcComponent;
  let fixture: ComponentFixture<AddCompanyPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompanyPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
