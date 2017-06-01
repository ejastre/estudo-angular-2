/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiretivaNgIfService } from './diretiva-ng-if.service';

describe('DiretivaNgIfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaNgIfService]
    });
  });

  it('should ...', inject([DiretivaNgIfService], (service: DiretivaNgIfService) => {
    expect(service).toBeTruthy();
  }));
});
