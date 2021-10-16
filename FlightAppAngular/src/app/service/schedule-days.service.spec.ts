import { TestBed } from '@angular/core/testing';

import { ScheduleDaysService } from './schedule-days.service';

describe('ScheduleDaysService', () => {
  let service: ScheduleDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
