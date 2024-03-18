/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegiaoService } from './regiao.service';

describe('Service: Regiao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegiaoService]
    });
  });

  it('should ...', inject([RegiaoService], (service: RegiaoService) => {
    expect(service).toBeTruthy();
  }));
});
