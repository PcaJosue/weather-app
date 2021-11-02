import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { Location } from 'src/app/model/search.mode';
import { WeatherService } from 'src/app/services/weather.service';
import { SetInfo } from '../state/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: string = '';
  cities: Location[];
  error: boolean = false;

  @Output() onClose = new EventEmitter<boolean>();;


  constructor(private weatherService: WeatherService, private store: Store) { }

  ngOnInit(): void {
  }

  searchCity() {

    this.cities = [];
    if (this.searchInput?.length === 0) {
      this.error = true;
      return;
    }

    this.error = false;
    this.weatherService.searchLocation(this.searchInput).subscribe((data: Location[]) => {
      this.cities = data;
    })
  }


  async selectCity(city) {
    try {
      const info = await this.weatherService.getInfo(city.woeid).toPromise();
      this.store.dispatch(new SetInfo(info))
      this.onClose.emit(true);
    } catch (error) { }

  }
  close() {
    this.onClose.emit(true);
  }

}
