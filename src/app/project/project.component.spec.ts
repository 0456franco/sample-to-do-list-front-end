import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectService } from '../services/project.service';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  
  let component: ProjectComponent
  let fixture: ComponentFixture<ProjectComponent>

  let httpClient: HttpClient
  let service: ProjectService

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents()

    service = TestBed.inject(ProjectService)
    httpClient = TestBed.inject(HttpClient)

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
