import { Component, OnInit } from '@angular/core';
import { Highlight } from 'src/app/model/highlight.model';
import { Info } from 'src/app/model/info.model';
import { Short } from 'src/app/model/short.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  searching: boolean = false;
  info: Info = {
    date: '2021-11-1',
    img: 'Snow',
    temperature: 15,
    ubication: 'Helsinki',
    weather: 'Shower'
  }
  highlight: Highlight = {
    description: 'Wind status',
    info: { value: 7, metric: 'mph' },
    graphic: {
      icon: 'arrow_drop_down',
      label: 'WSW',
      type: 'wind'
    }

  }

  short: Short = {

    date: 'Tomorrow',
    img: 'Snow',
    range: {
      min: 11,
      max: 18
    }

  }



  constructor() { }

  ngOnInit(): void {
  }

  close() {

  }

  closeSearch() {
    this.searching = false;
  }

  search(event) {
    console.log('event', event);
    this.searching = true;
  }
}
