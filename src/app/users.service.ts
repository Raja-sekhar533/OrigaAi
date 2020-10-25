import { Users } from './interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const DATA_URL = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedname = '';
  selectedemail: any;
  username = '';
  constructor(private http: HttpClient) { }
  selectedUserData(){
    return this.selectedname;
  }
  selectedMail(){
    return this.selectedemail;
  }
  selecteduser(){
    return this.username;
  }

  getUsers(){
  return this.http.get<Users[]>(DATA_URL);
  }

  selectedUser(name){
    this.selectedname = name;
  }
  selectedUserName(username){
    this.username = username;
  }
  selectedEmail(email){
    this.selectedemail = email;
  }
}
