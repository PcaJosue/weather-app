import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  searchLocation(location: string) {
    return this.http.get(`${URL}/location/search/?query=${location}`, { responseType: 'json' })
  }

  searchMyLocation(lat, long) {
    return this.http.get(`${URL}/location/search/?lattlong=${lat},${long}`)
  }
}
