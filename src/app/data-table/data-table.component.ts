import { Users } from './../interface';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  users: Users[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
   this.userService.getUsers().subscribe(response => {
     this.users = response;
     console.log(response);
   });
  }

  submitData(value){
    console.log(value.value);
  }
}
