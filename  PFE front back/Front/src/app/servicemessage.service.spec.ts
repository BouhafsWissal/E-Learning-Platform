import { TestBed } from '@angular/core/testing';

import { ServicemessageService } from './servicemessage.service';

describe('ServicemessageService', () => {
  let service: ServicemessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
