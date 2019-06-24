import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-grid',
  templateUrl: './row-grid.component.html',
  styleUrls: ['./row-grid.component.css']
})
export class RowGridComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
