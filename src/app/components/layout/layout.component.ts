import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Highlight } from 'src/app/model/highlight.model';
import { Info } from 'src/app/model/info.model';
import { Short } from 'src/app/model/short.model';
import { WeatherService } from 'src/app/services/weather.service';
import { SetInfo, SetMetric } from '../state/actions';
import { WeatherState, WeatherStateModel } from '../state/state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  @Select(WeatherState.getMetric) centigrades$: Observable<boolean>;
  @Select(WeatherState.getShorts) shorts$: Observable<Short[]>;
  @Select(WeatherState.getInfo) info$: Observable<Info>;
  @Select(WeatherState.getHighlights) highlights$: Observable<Highlight[]>;

  searching: boolean = false;
  loading: boolean = true;

  constructor(private store: Store, private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const data = await this.weatherService.searchMyLocation(lat, long).toPromise();
        const info = await this.weatherService.getInfo(data[0].woeid).toPromise();
        this.store.dispatch(new SetInfo(info))
        this.loading = false;
      } catch (error) { }
    }, async (error) => {

      try {
        const info = await this.weatherService.getInfo(44418).toPromise();
        this.store.dispatch(new SetInfo(info))
        this.loading = false
      } catch (error) { throw error }
    });

  }


  closeSearch() {
    this.searching = false;
  }

  search(event) {
    this.searching = true;
  }

  changeMetric(metric) {
    this.store.dispatch(new SetMetric(metric === "C"))
  }
}
