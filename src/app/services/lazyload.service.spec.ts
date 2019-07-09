import { TestBed } from '@angular/core/testing';

import { LazyloadService } from './lazyload.service';

describe('LazyloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyloadService = TestBed.get(LazyloadService);
    expect(service).toBeTruthy();
  });
});
