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

  userIndex(){

  }

  ngOnInit(): void {
    
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    

    

    //Find user slug and if none is set, the procceed to list
    //all the users
    this.user.slug = urlParams.get('name')
    this.user.username = urlParams.get('name')

    if(this.user.slug == null) 
      this.userIndex()
    else
      this.getUser()

  } 

}
