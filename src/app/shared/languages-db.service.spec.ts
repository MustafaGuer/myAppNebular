import { TestBed } from '@angular/core/testing';

import { LanguagesDBService } from './languages-db.service';

describe('LanguagesDBService', () => {
  let service: LanguagesDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
