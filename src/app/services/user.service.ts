import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const API = environment.apiEndpoint + 'user/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public show(user: User): Observable<any>{

    let api = `${API}show`

    let reqObj = {
      slug: user.slug
    }

    console.log("req", reqObj)

    return this.http.post(api, reqObj)
  
  }  

}
