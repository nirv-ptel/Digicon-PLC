import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyPlcComponent } from './view-company-plc.component';

describe('ViewCompanyPlcComponent', () => {
  let component: ViewCompanyPlcComponent;
  let fixture: ComponentFixture<ViewCompanyPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompanyPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
