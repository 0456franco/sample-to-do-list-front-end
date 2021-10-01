import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { UserService } from '../services/user.service'

import { UserComponent } from './user.component'

describe('UserComponent', () => {

  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  let httpClient: HttpClient
  let service: UserService

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents()

    service = TestBed.inject(UserService)
    httpClient = TestBed.inject(HttpClient)

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  
})
