import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/usuer'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_link='http://localhost:3000';
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(`${this.api_link}/api/user/`);
  }

  getUser(iduser: string){
    return this.http.get(`${this.api_link}/api/user/${iduser}`);
  }
  guardarUser(user: User){
    return this.http.post(`${this.api_link}/api/user/`, user);
  }
  eliminarUser(id:string){
    return this.http.delete(`${this.api_link}/api/user/${id}`);
  }
  actualizarUser(id:number, actualizarUser:User){
    return this.http.put(`${this.api_link}/api/user/${id}`,actualizarUser);
  }
}

