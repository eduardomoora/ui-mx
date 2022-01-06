import { TestBed } from '@angular/core/testing';

import { EddieLibService } from './eddie-lib.service';

describe('EddieLibService', () => {
  let service: EddieLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EddieLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
