import { TestBed } from '@angular/core/testing';

import { GetRefService } from './get-ref.service';

describe('GetRefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRefService = TestBed.get(GetRefService);
    expect(service).toBeTruthy();
  });
});
