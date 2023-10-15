import { TestBed } from '@angular/core/testing';

import { ServiceevaluationService } from './serviceevaluation.service';

describe('ServiceevaluationService', () => {
  let service: ServiceevaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceevaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
