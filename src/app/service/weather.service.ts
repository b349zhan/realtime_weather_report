import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  forecasts:any[] = [];
  constructor(private http: HttpClient) {
    let url_map:any = {
      "10d":"http://openweathermap.org/img/wn/10d@2x.png",
       "04d":"http://openweathermap.org/img/wn/04d@2x.png",
       "13d":"http://openweathermap.org/img/wn/13d@2x.png"
    }
    let weekday_map:any = {
      0:"MON",
      1:"TUE",
      2:"WED",
      3:"THUR",
      4:"FRI",
      5:"SAT",
      6:"SUN"
    }
    let open_url = `http://api.openweathermap.org/data/2.5/onecall?lat=43.651070&lon=-79.347015&exclude=minutely,hourly,alerts&appid=${environment.OPEN_API_KEY}`
    this.http.get(open_url).subscribe((data:any)=>{
      for (let i = 0; i < 5; i++){
        this.forecasts.push({
          'day': weekday_map[new Date(data['daily'][i]['dt']*1000).getDay()],
          'icon': data['daily'][i]['weather'][0]['icon'],
          'day_temp':(data['daily'][i]['temp']['day']-273.15).toFixed(0),
          'night_temp':(data['daily'][i]['temp']['night']-273.15).toFixed(0)
        })
      }
    })
  }

  get_forcast_data(){
    return this.forecasts
  }
}
