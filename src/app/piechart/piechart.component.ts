import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Users } from '../interface';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  myChart ;
  users: any;
  usersData: Users[] = [];
  lat: any;
  lng: any;

  constructor(private userServise: UsersService) { }

  ngOnInit(): void {
    this.userServise.getUsers().subscribe(response => {
      this.usersData = response;
    });


    this.myChart = new Chart('myChart', {
      type: 'pie',
      options: {
        responsive:true,
        title: {
          display: true,
          text: 'pie chart'
        }, legend: {
          position: 'bottom'
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      }, data:{
        datasets:[{
          data: [20, 10, 25, 15].reverse(),
          backgroundColor: ["red", 'orange', 'green', 'blue'],
          label: 'dataset 1'
        }],
        labels: ['lattitude > 0', 'lattitude < 0', 'langitude > 0', 'langitude <0']
      }
  });
  }

}
