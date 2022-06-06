import { TestBed } from '@angular/core/testing';

import { RequestOtpService } from './request-otp.service';

describe('RequestOtpService', () => {
  let service: RequestOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
