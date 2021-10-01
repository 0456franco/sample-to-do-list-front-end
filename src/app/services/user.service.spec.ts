import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  let httpClient: HttpClient

  beforeEach( async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [HttpClientModule]
    })

    service = TestBed.inject(UserService)
    httpClient = TestBed.inject(HttpClient)
  
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
