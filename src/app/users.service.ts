import { Users } from './interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const DATA_URL = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Users[]>(DATA_URL);
  }
  setCurrentUser(user) {
    this.user = user;
  }
  getCurrentUser() {
   return this.user || '';
  }
}
