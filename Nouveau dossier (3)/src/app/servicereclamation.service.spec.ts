import { TestBed } from '@angular/core/testing';

import { ServicereclamationService } from './servicereclamation.service';

describe('ServicereclamationService', () => {
  let service: ServicereclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicereclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
