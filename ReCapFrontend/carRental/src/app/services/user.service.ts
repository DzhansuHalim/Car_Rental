import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44394/api/";

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + "users/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  } 

  addUser(user : User): Observable<ResponseModel>{
    let newPath = this.apiUrl + "auth/register"
    return this.httpClient.post<ResponseModel>(newPath, user)
  }

} 
