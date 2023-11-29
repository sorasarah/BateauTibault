import { TestBed } from '@angular/core/testing';

import { RestosService } from './restos.service';

describe('RestosService', () => {
  let service: RestosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
