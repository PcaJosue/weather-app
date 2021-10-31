import { Component, Input, OnInit } from '@angular/core';
import { Short } from 'src/app/model/short.model';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit {

  @Input() short: Short
  @Input() centigrades: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
