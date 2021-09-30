import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Task } from '../models/task';
import { Project } from '../models/project';

const API = environment.apiEndpoint + 'task/'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  
  public index(project: Project): Observable<any>{

    let api = `${API}index`

    let reqObj = {
      id: project.id
    }

    return this.http.post(api, reqObj)
  
  }  

}
