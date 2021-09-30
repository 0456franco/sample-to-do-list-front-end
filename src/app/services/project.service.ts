import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as myToDoGlobals from 'src/app/globals';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

const API = environment.apiEndpoint + 'project/'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  
  public show(project: Project): Observable<any>{

    let api = `${API}show`

    let obj = {
      slug: project.slug
    }

    return this.http.post(api, obj)
  
  }   

  public index(): Observable<any>{

    let api = `${API}index`

    return this.http.get(api)
  
  }  

}
