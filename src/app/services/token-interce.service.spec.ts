import { TestBed } from '@angular/core/testing';

import { TokenInterceService } from './token-interce.service';

describe('TokenInterceService', () => {
  let service: TokenInterceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
