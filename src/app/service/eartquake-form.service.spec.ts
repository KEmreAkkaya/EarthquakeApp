import { TestBed } from '@angular/core/testing';

import { EartquakeFormService } from './eartquake-form.service';

describe('EartquakeFormService', () => {
  let service: EartquakeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EartquakeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
