import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  templateUrl: 'dashboard.component.html',  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
