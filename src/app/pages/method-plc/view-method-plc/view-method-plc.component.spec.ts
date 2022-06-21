import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMethodPlcComponent } from './view-method-plc.component';

describe('ViewMethodPlcComponent', () => {
  let component: ViewMethodPlcComponent;
  let fixture: ComponentFixture<ViewMethodPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMethodPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMethodPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
