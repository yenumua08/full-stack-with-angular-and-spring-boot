import { TestBed } from '@angular/core/testing';

import { HttpBasicIntercepterBasicAuthService } from './http-basic-intercepter-basic-auth.service';

describe('HttpBasicIntercepterBasicAuthService', () => {
  let service: HttpBasicIntercepterBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBasicIntercepterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
