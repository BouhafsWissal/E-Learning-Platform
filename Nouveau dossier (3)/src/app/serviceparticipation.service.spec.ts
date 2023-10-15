import { TestBed } from '@angular/core/testing';

import { ServiceparticipationService } from './serviceparticipation.service';

describe('ServiceparticipationService', () => {
  let service: ServiceparticipationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceparticipationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
