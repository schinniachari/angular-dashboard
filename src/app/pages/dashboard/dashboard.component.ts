import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.data.push({
      header: 'Full House, Inc.',
      title: '$4606.29',
      text: 'Bechtelar and Lesch',
    });
    this.data.push({
      header: 'Lakeland, Inc.',
      title: '$8456.44',
      text: 'Beer-Kuhlman',
    });
    this.data.push({
      header: 'Kilroy Corporation',
      title: '$7375.86',
      text: 'Dietrich, Pfannerstill and Beahan',
    });
    this.data.push({
      header: 'Sears Hometown Inc.',
      title: '$8806.05',
      text: 'Batz, Rolfson and Medhurst',
    });
  }
  chartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'orange',
    },
    {
      // green
      backgroundColor: 'green',
    },
    {
      // yellow
      backgroundColor: 'yellow',
    },
    {
      // red
      backgroundColor: 'red',
    },
  ];

  barChartData = [
    { data: [65, 6, 80, 81, 56, 55, 40], label: 'Stock A' },
    { data: [28, 8, 40, 19, 86, 27, 90], label: 'Stock B' },
    { data: [128, 8, 4, 19, 286, 27, 7], label: 'Stock C' },
    { data: [111, 8, 1, 3, 86, 2, 293], label: 'Stock D' },
    { data: [1, 3, 86, 2, 293, 27, 90], label: 'Stock E' },
    { data: [28, 8, 65, 6, 80, 81, 56], label: 'Stock F' },
  ];
  optionsVariable = {
    scales: {
      yAxes: [
        {
          ticks: {
            steps: 10,
            stepValue: 10,
            max: 50,
          },
        },
      ],
    },
  };

  lineData = [
    {
      data: [0, 600, 260, 700],
      label: 'Revenue/ Income',
    },
    {
      data: [120, 455, 100, 340],
      label: 'Debt',
    },
    {
      data: [45, 67, 800, 500],
      label: 'PAT Margins',
    },
  ];
  title = 'market-analytics-dashboard';
  data: [{ header: string; title: string; text: string }] = [
    {
      header: 'VictorySharesd ETF',
      title: '$6642.21',
      text: 'Raynor, Larson and Renner',
    },
  ];
}
