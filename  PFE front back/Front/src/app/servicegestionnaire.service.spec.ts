import { TestBed } from '@angular/core/testing';

import { ServicegestionnaireService } from './servicegestionnaire.service';

describe('ServicegestionnaireService', () => {
  let service: ServicegestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicegestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
