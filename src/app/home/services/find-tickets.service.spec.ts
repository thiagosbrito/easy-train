import { TestBed } from '@angular/core/testing';

import { FindTicketsService } from './find-tickets.service';

describe('FindTicketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindTicketsService = TestBed.get(FindTicketsService);
    expect(service).toBeTruthy();
  });
});
