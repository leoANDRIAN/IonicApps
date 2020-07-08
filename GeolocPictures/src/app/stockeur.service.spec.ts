import { TestBed } from '@angular/core/testing';

import { StockeurService } from './stockeur.service';

describe('StockeurService', () => {
  let service: StockeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
