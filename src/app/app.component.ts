import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'market-analytics-dashboard';
  data: [{ header: string; title: string; text: string }] = [
    {
      header: 'Invoices - This Month',
      title: '$75.98K',
      text: '% of difference From: 0.52%',
    },
  ];
  ngOnInit() {
    this.data.push({
      header: 'Invoices - This Month',
      title: '$75.98K',
      text: '% of difference From: 0.52%',
    });
    this.data.push({
      header: 'Invoices - This Month',
      title: '$75.98K',
      text: '% of difference From: 0.52%',
    });
    this.data.push({
      header: 'Invoices - This Month',
      title: '$75.98K',
      text: '% of difference From: 0.52%',
    });
    this.data.push({
      header: 'Invoices - This Month',
      title: '$75.98K',
      text: '% of difference From: 0.52%',
    });
  }
}
