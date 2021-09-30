import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projectList: Array<Project> = []

  constructor(private projectService: ProjectService,
              private router: Router) { }

  public getProjects(){

    this.projectService.index().subscribe(
      resp => {        
        this.getProjectsCb(resp)
      },
      error => {
        // TO-DO: Log Error into Sentry
      }
    )

  }

  public getProjectsCb(resp: any){

    console.log("Project", resp)

    if(resp.success){

      resp.projectList.forEach( (project: Project) => {

        this.projectList.push(project)

      })

    }

  }

  public openProject(project: Project){

    this.router.navigate([`/project/${project.slug}`])

  }

  ngOnInit(): void {
    this.getProjects()
  }

}
