import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forecasts:any[] = []
  constructor(private weather_service: WeatherService) { }

  ngOnInit(): void {
    this.forecasts = this.weather_service.get_forcast_data();
  }
  
}
