import { TestBed } from '@angular/core/testing';

import { BhaaApiService } from './bhaa-api.service';

describe('BhaaApiService', () => {
  let service: BhaaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhaaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
