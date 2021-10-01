import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {

  let service: TaskService;

  let httpClient: HttpClient

  beforeEach( async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [HttpClientModule]
    })

    service = TestBed.inject(TaskService)
    httpClient = TestBed.inject(HttpClient)
  
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
