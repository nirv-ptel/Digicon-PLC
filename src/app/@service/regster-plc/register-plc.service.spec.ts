import { TestBed } from '@angular/core/testing';

import { RegisterPlcService } from './register-plc.service';

describe('RegisterPlcService', () => {
  let service: RegisterPlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
