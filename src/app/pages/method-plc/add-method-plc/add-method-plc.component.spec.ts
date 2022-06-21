import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMethodPlcComponent } from './add-method-plc.component';

describe('AddMethodPlcComponent', () => {
  let component: AddMethodPlcComponent;
  let fixture: ComponentFixture<AddMethodPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMethodPlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMethodPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
