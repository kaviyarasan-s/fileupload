import { TestBed } from '@angular/core/testing';

import { RegistorServiceService } from './registor-service.service';

describe('RegistorServiceService', () => {
  let service: RegistorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
