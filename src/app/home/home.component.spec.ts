import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { ProjectService } from '../services/project.service' 

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser'
import { Project } from '../models/project' 

describe('HomeComponent', () => {

  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  
  let httpClient: HttpClient
  let service: ProjectService

  let projectListSpy: any

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents()

    service = TestBed.inject(ProjectService)
    httpClient = TestBed.inject(HttpClient)

  })

  beforeEach(() => {
    
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    projectListSpy = spyOnProperty(component, '_projectList').and.callThrough()

  })

  it('should create the home component: ', () => {
    expect(component).toBeTruthy()
  })

  it('should create a section element', () =>{

    const { debugElement } = fixture

    let sectionEl = debugElement.query( By.css('section') )

    expect(sectionEl).toBeDefined()

  })

  it('should create a h2 header with content "PICK A PROJECT TO START" ', () => {
    
    const { debugElement } = fixture

    let h2 = debugElement.query( By.css('h2') )

    expect(h2).toBeTruthy()

    expect(h2.nativeElement.innerHTML)
    .toBe('PICK A PROJECT TO START')

  })

  //Please make sure you turn on your backend api.
  it('should be able to call the getProjects function and Store the results', async () => {

    //Spy on the getProjects function so that we know it was called.
    spyOn(component, 'getProjects')    

    //Call the getProjects method so that we can access our project list.
    component.getProjects()

    //Make sure our getProjects function was called sucessfully.
    expect(component.getProjects).toHaveBeenCalled()

    //Store the results into the projectList member
    expect(component._projectList).toBeArray()

    //Should display an array of results as a response from the server.
    console.log("My Project List", component._projectList) 

  })

  it('should create project elements after receiving the list of results', async () => {

    const { debugElement } = fixture    

    let projectList = debugElement.query( By.css('.project') )

  })

})
