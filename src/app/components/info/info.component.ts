import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Info } from 'src/app/model/info.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  @Input() centigrades: boolean;
  @Input() info: Info;
  @Output() onSearch = new EventEmitter<boolean>();
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  searchMyLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.weatherService.searchMyLocation(lat, long).subscribe(data => {
        console.log('my location', data);
      })

    });

  }

  search() {
    this.onSearch.emit(true);
  }


}
