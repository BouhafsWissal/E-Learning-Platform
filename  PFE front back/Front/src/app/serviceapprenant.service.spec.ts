import { TestBed } from '@angular/core/testing';

import { ServiceapprenantService } from './serviceapprenant.service';

describe('ServiceapprenantService', () => {
  let service: ServiceapprenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceapprenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
