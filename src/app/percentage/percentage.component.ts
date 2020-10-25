import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../interface';
@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  numOfUsers;
  selectedName = '';
  selectedEmail: any;
  selectedUsername = '';
  users: Users[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.selectedName = this.userService.selectedUserData();
    this.selectedUsername = this.userService.selecteduser();
    this.selectedEmail = this.userService.selectedMail();
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      this.numOfUsers = this.users.length;
    });

  }

}
