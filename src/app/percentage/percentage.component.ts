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
  users: Users[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      this.numOfUsers = this.users.length;
    });
  }

}
