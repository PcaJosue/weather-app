import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Info } from 'src/app/model/info.model';
import { WeatherService } from 'src/app/services/weather.service';
import { SetInfo } from '../state/actions';
import { WeatherState } from '../state/state';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  @Select(WeatherState.getMetric) centigrades$: Observable<boolean>
  @Input() info: Info;
  @Output() onSearch = new EventEmitter<boolean>();
  constructor(private weatherService: WeatherService,
    private store: Store) { }

  ngOnInit(): void {
  }

  searchMyLocation() {

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const data = await this.weatherService.searchMyLocation(lat, long).toPromise();
        const info = await this.weatherService.getInfo(data[0].woeid).toPromise();
        this.store.dispatch(new SetInfo(info))
      } catch (error) { throw error }
    });

  }

  search() {
    this.onSearch.emit(true);
  }


}
