import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { ProjectService } from '../services/project.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectName: string | null = null

  project: Project = new Project()
  taskListUp: boolean = false

  taskList: Array<Task> = []

  projectEstimatedHours: number = 0

  constructor(private projectService: ProjectService, 
              private taskService: TaskService,
              private activatedRoute: ActivatedRoute) { }

  public getProject(){
    this.projectService.show(this.project).subscribe(
      resp => {        
        this.getProjectCb(resp)
      },
      error => {
        // TO-DO: Log Error into Sentry
      }
    )
  }

  public getProjectCb(resp: any){

    if(resp.success){

      this.project = resp.project
      console.log("project", this.project)
      this.getProjectTasks()

    }
     
  }

  public getProjectTasks(){

    this.taskService.index(this.project).subscribe(
      resp => {        
        this.getProjectTasksCb(resp)
      },
      error => {
        // TO-DO: Log Error into Sentry
      }    
    )

  }

  public getProjectTasksCb(resp: any){
    
    console.log("getProjectTasksCb", resp)

    if(resp.success){

      resp.task_list.forEach( (task: Task) => {

        this.projectEstimatedHours += task.estimated_hours
        this.taskList.push(task)
        
      });

      this.taskListUp = true

    } else {
      // TO-DO: LOG Error into Sentry.
    }

  }

  ngOnInit(): void {

    this.project.slug = this.activatedRoute.snapshot.paramMap.get('slug')

    if(this.project.slug == null){
    
      throw new Error('Project name cannot be null.')
    
    } else {

      console.log("Project Name", this.project.slug)
      this.getProject()

    }

  }

}
