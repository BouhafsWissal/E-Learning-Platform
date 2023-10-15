import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }

  }
  public chartType = "bar"
  public chartLegend = true
  public barChartLabels = ["2000", "2001", "2002", "2003"]
  public barChartData = [
    {
      data: [25, 50, 56, 70],
      label: "serie A"
    },
    {
      data: [50, 70, 30, 100],
      label: "serie B"
    }, {
      data: [10, 100, 50, 60],
      label: "serie C"
    },
    {
      data: [20, 60, 40, 80],
      label: "serie D"
    }

  ]

  public pieChartLabels = ["homme", "femme", "autre"] 
  public pieChartData = [ 10, 50, 40 ] 
  public pieType = "pie"

  constructor() { }

  ngOnInit(): void {
  }

}
