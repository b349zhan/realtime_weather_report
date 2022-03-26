import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input('day') day:string="";
  @Input('icon') icon:string="";
  @Input('day_temp') day_temp:number = -999999999;
  @Input('night_temp') night_temp:number = -9999999;
  constructor() { }

  ngOnInit(): void {
  }

}
