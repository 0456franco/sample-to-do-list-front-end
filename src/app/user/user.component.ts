import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Task } from '../models/task';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userName: string | null = null

  user: User = new User()

  taskList: Array<Task>= []

  projectEstimatedHours: number = 0

  constructor(private userService: UserService) {}                

  public getUser(){

    this.userService.show(this.user).subscribe(
      resp => {        
        this.getUserCb(resp)
      }
    )

  }

  public getUserCb(resp: any){
    
    console.log("Task List", resp.task_list)

    if(resp.success){
      
      this.taskList = resp.task_list

      resp.task_list.forEach( (task: Task) => {
        this.projectEstimatedHours += task.estimated_hours
      })

      this.user.username = resp.user.username
    
    }

  }

  ngOnInit(): void {
    
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    this.userName = urlParams.get('name')

    this.user.slug = urlParams.get('name')

    console.log("Username", this.userName)

    if(this.user.slug == null){
      throw new Error('Username cannot be null.')
    }

    this.getUser()

  } 

}
