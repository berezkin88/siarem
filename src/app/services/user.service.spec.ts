import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireDatabase, useClass: MockAngularFireDatabase },
        UserService
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class MockAngularFireDatabase {}
