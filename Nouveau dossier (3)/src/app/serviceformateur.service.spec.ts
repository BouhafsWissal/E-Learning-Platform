import { TestBed } from '@angular/core/testing';

import { ServiceformateurService } from './serviceformateur.service';

describe('ServiceformateurService', () => {
  let service: ServiceformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
