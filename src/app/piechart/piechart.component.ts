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
  myChart;
  users: any;
  usersData: Users[] = [];
  negativeLongitudeList: Users[];
  positiveLongitudeList: Users[];
  negativeLatitudeList: Users[];
  positiveLatitudeList: Users[];
  negativeLongitudeListPercentage: number;
  positiveLatitudeListPercentage: number;
  negativeLatitudeListPercentage: number;
  positiveLongitudeListPercentage: number;
  constructor(private userServise: UsersService) { }

  ngOnInit(): void {
    this.userServise.getUsers().subscribe(response => {
      this.usersData = response;
      this.negativeLongitudeList = this.usersData.filter(data => (Number(data.address.geo.lng) < 0));
      this.positiveLongitudeList = this.usersData.filter(data => (Number(data.address.geo.lng) >= 0));
      this.negativeLatitudeList = this.usersData.filter(data => (Number(data.address.geo.lat) < 0));
      this.positiveLatitudeList = this.usersData.filter(data => (Number(data.address.geo.lat) >= 0));
      console.log(this.usersData.length);
      this.negativeLongitudeListPercentage = (this.negativeLongitudeList.length / this.usersData.length) / 2 * 100;
      this.positiveLongitudeListPercentage = (this.positiveLongitudeList.length / this.usersData.length) / 2 * 100;
      this.negativeLatitudeListPercentage = (this.negativeLatitudeList.length / this.usersData.length) / 2 * 100;
      this.positiveLatitudeListPercentage = (this.positiveLatitudeList.length / this.usersData.length) / 2 * 100;
      console.log('>>>>>negativeLongitudeList', this.negativeLongitudeList);
      console.log('>>>>>positiveLongitudeList', this.positiveLongitudeList);
      console.log('>>>>>negativeLatitudeList', this.negativeLatitudeList);
      console.log('>>>>>positiveLatitudeList', this.positiveLatitudeList);
      console.log('>>>>>negativeLongitudeListPercentage', this.negativeLongitudeListPercentage);
      console.log('>>>>>positiveLongitudeListPercentage', this.positiveLongitudeListPercentage);
      console.log('>>>>>negativeLatitudeListPercentage', this.negativeLatitudeListPercentage);
      console.log('>>>>>positiveLatitudeListPercentage', this.positiveLatitudeListPercentage);
    });


    this.myChart = new Chart('myChart', {
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'pie chart'
        }, legend: {
          position: 'bottom'
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      }, data: {
        datasets: [{
          data: [25, 25,75, 15],
          backgroundColor: ['red', 'orange', 'green', 'blue'],
          label: 'dataset 1'
        }],
        labels: ['lattitude > 0', 'lattitude < 0', 'longitude > 0', 'longitude <0']
      }
    });
  }

}
