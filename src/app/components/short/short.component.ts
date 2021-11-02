import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Short } from 'src/app/model/short.model';
import { WeatherState } from '../state/state';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit {

  @Input() short: Short

  @Select(WeatherState.getMetric) centigrades$: Observable<boolean>
  constructor() { }

  ngOnInit(): void {
  }

}
