import { TestBed } from '@angular/core/testing';

import { BrMaskService } from './rodrigorhas-brmask.service';

describe('RodrigorhasBrmaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrMaskService = TestBed.get(BrMaskService);
    expect(service).toBeTruthy();
  });
});
