import { Component, Input, OnInit } from '@angular/core';
import { Highlight } from 'src/app/model/highlight.model';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

  @Input() highlight: Highlight;

  constructor() { }

  ngOnInit(): void {
  }

}
