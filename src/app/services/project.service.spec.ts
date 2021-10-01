import { TestBed } from '@angular/core/testing'
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ProjectService } from './project.service'

describe('ProjectService', () => {

  let service: ProjectService
  let httpClient: HttpClient

  beforeEach( async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [HttpClientModule]
    })

    service = TestBed.inject(ProjectService)
    httpClient = TestBed.inject(HttpClient)
  
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

})
